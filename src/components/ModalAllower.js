import './ModalAllower.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const ModalAllower = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [readValue, setReadValue] = useState('');
    const [itemToDelete, setItemToDelete] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const readAllowerList = () => {

        axios
        .get("workRegister/readNewAllower") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readAllowerList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);

 
    const handleModalDelete = () => {
        axios
        .delete(`workRegister/deleteNewAllower/${itemToDelete._id}`) 
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

    const updateAllowerList = (item) => {
        axios
        .post(`workRegister/editNewAllower/${item._id}`, {allowerCompany: readValue}) 
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
        if(el.allowerCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modal">
                <div>
                    <div>
                        <p className='xModal' onClick={() => {setOpenModal(() => {return {supervisorName: false}})}}>X</p>
                    </div> 
                    <div>
                        <h3>Dopuszczający</h3>
                    </div>                
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Dopuszczający</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.allowerName, 'allowerName'); 
                                        }} 
                                        /></td><td className="name">{item.allowerName}</td>
                                        <td className="companyName">{!inputDisabled[i] && item.allowerCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={readValue} className='companyInput'placeholder={readValue==='' ? 'Brak danych!!!' : ''}/>}
                                        {inputDisabled[i] && <button disabled={readValue==='' ? true : false} onClick={() => {
                                            updateAllowerList(item);   
                                            readAllowerList();          
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
                                            setReadValue(register[i].allowerCompany);      
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

export default ModalAllower;