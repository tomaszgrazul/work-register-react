import './ModalCoordinator.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const ModalCoordinator = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [readValue, setReadValue] = useState('');
    const [itemToDelete, setItemToDelete] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const readCoordinatorList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewCoordinator") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readCoordinatorList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);
   
   
    const handleModalDelete = () => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewCoordinator/${itemToDelete._id}`) 
        .then((res) => {       
        if (!res.data.error) {
            const filtered = register.filter((el, i) =>
                i !== register.findIndex((el) => el === itemToDelete)
            );
            setRegister(filtered);
            setError(false);
            } else {
                setError(true);
            }
        })
        .catch((error) => {
            console.error(error);
        });
        setOpenModalDelete(false);  
    }

    const handleInputCompany = (e) => {
        setReadValue(e.target.value);
    }

    const updateCoordinatorList = (item) => {
        axios
        .post(`http://127.0.0.1:8080/editNewCoordinator/${item._id}`, {coordinatorCompany: readValue}) 
        .then(() => {       

        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    const checkHandler = (i) => {
        setInputDisabled(inputDisabled.map((item, index) => {
              return item = index === i ? !item : item;
        }));
      }

      const filtered = (el) => {
        if(el.coordinatorCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modalCoordinator">
                <div className='topModal'>
                    <h3>Koordynator</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {coordinatorName: false}})}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Koordynator</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.coordinatorName, 'coordinatorName'); 
                                        }} 
                                        /></td><td className="name">{item.coordinatorName}</td>
                                        <td className="companyName">{!inputDisabled[i] && item.coordinatorCompany}
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={readValue} className='companyInput' placeholder={readValue==='' ? 'Brak danych!!!' : ''}/>}
                                        {inputDisabled[i] && <button disabled={readValue==='' ? true : false} onClick={() => {
                                            updateCoordinatorList(item);   
                                            readCoordinatorList();         
                                        }}
                                        className="btnSend">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            setItemToDelete(item); 
                                            setOpenModalDelete(true);             
                                        }}
                                        className="btnDelete">Usuń
                                        </button>
                                        <button onClick={() => {           
                                            checkHandler(i);   
                                            setReadValue(register[i].coordinatorCompany);     
                                        }}
                                        className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                        </button></td></tr>
                                )     
                            })
                        }    
                    </tbody>
                </table>
                {openModalDelete && <ModalDelete setOpenModalDelete={setOpenModalDelete} handleModalDelete={handleModalDelete}/>}
            </div>
        )
}

export default ModalCoordinator;