import './ModalSupervisor.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalSupervisor = ({setModalSupervisor, handleAddSupervisor, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [updateSupervisorCompany, setUpdateSupervisorCompany] = useState('');

    const readSupervisorList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewSupervisor") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readSupervisorList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);
   
   
    const deleteSupervisorList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewSupervisor/${item._id}`) 
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
        setUpdateSupervisorCompany(e.target.value);
    }

    const updateSupervisorList = (item, dataCompany) => {
        axios
        .post(`http://127.0.0.1:8080/editNewSupervisor/${item._id}`, {supervisorCompany: dataCompany}) 
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
        if(el.supervisorCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modalSupervisor">
                <div className='topModal'>
                    <h3>Nadzór eksploatacyjny</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setModalSupervisor(false)}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Nadzorujący</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddSupervisor(item.supervisorName); 
                                        }} 
                                        /></td><td className="name">{item.supervisorName}</td>
                                        <td className="companyName">{item.supervisorCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={updateSupervisorCompany} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updateSupervisorList(item, updateSupervisorCompany); 
                                            setInputDisabled(false);   
                                            readSupervisorList();    
                                            setUpdateSupervisorCompany('');      
                                        }}
                                        className="btn-wyślij">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deleteSupervisorList(item);             
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

export default ModalSupervisor;