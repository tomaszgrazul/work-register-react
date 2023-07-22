import './ModalAllower.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalAllower = ({setOpenModal, handleAddAllower, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [updateAllowerCompany, setUpdateAllowerCompany] = useState('');

    const readAllowerList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewAllower") 
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
   
   
    const deleteAllowerList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewAllower/${item._id}`) 
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
        setUpdateAllowerCompany(e.target.value);
    }

    const updateAllowerList = (item, dataCompany) => {
        axios
        .post(`http://127.0.0.1:8080/editNewAllower/${item._id}`, {allowerCompany: dataCompany}) 
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
            <div className="modalAllower">
                <div className='topModal'>
                    <h3>Dopuszczający</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {supervisorName: false}})}}>X</p>
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
                                            handleAddAllower(item.allowerName); 
                                        }} 
                                        /></td><td className="name">{item.allowerName}</td>
                                        <td className="companyName">{item.allowerCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={updateAllowerCompany} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updateAllowerList(item, updateAllowerCompany); 
                                            setInputDisabled(false);   
                                            readAllowerList();    
                                            setUpdateAllowerCompany('');      
                                        }}
                                        className="btn-wyślij">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deleteAllowerList(item);             
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

export default ModalAllower;