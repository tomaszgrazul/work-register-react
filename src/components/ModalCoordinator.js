import './ModalCoordinator.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalCoordinator = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [updateCoordinatorCompany, setUpdateCoordinatorCompany] = useState('');

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
   
   
    const deleteCoordinatorList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewCoordinator/${item._id}`) 
        .then((res) => {       
        if (!res.data.error) {
            const filtered = register.filter((el, i) =>
                i !== register.findIndex((el) => el === item)
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
    }

    const handleInputCompany = (e) => {
        setUpdateCoordinatorCompany(e.target.value);
    }

    const updateCoordinatorList = (item, dataCompany) => {
        axios
        .post(`http://127.0.0.1:8080/editNewCoordinator/${item._id}`, {coordinatorCompany: dataCompany}) 
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
                                        <td className="companyName">{item.coordinatorCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={updateCoordinatorCompany} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updateCoordinatorList(item, updateCoordinatorCompany); 
                                            setInputDisabled(false);   
                                            readCoordinatorList();    
                                            setUpdateCoordinatorCompany('');      
                                        }}
                                        className="btn-wyślij">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deleteCoordinatorList(item);             
                                        }}
                                        className="btn-delete">Usuń
                                        </button>
                                        <button onClick={() => {           
                                            checkHandler(i);       
                                        }}
                                        className="btn-update">Edytuj
                                        </button></td></tr>
                                )     
                            })
                        }    
                    </tbody>
                </table>
            </div>
        )
}

export default ModalCoordinator;