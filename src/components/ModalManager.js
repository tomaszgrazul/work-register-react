import './ModalManager.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalManager = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [updateManagerCompany, setUpdateManagerCompany] = useState('');

    const readManagerList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewManager") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readManagerList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);
   
   
    const deleteManagerList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewManager/${item._id}`) 
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
        setUpdateManagerCompany(e.target.value);
    }

    const updateManagerList = (item, dataCompany) => {
        axios
        .post(`http://127.0.0.1:8080/editNewManager/${item._id}`, {managerCompany: dataCompany}) 
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
        if(el.managerCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modalManager">
                <div className='topModal'>
                    <h3>Kierujący zespołem</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {managerName: false}})}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Kierujący zespołem</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.managerName, 'managerName'); 
                                        }} 
                                        /></td><td className="name">{item.managerName}</td>
                                        <td className="companyName">{item.managerCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={updateManagerCompany} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updateManagerList(item, updateManagerCompany); 
                                            setInputDisabled(false);   
                                            readManagerList();    
                                            setUpdateManagerCompany('');      
                                        }}
                                        className="btn-wyślij">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deleteManagerList(item);             
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

export default ModalManager;