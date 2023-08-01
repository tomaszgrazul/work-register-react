import './ModalCoordinating.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalCoordinating = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [readValue, setReadValue] = useState('');

    const readCoordinatingList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewCoordinating") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readCoordinatingList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);
   
   
    const deleteCoordinatingList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewCoordinating/${item._id}`) 
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
        setReadValue(e.target.value);
    }

    const updateCoordinatingList = (item) => {
        axios
        .post(`http://127.0.0.1:8080/editNewCoordinating/${item._id}`, {coordinatingCompany: readValue}) 
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
        if(el.coordinatingCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modalCoordinating">
                <div className='topModal'>
                    <h3>Koordynujący</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {coordinatingName: false}})}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Koordynujący</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.coordinatingName, 'coordinatingName'); 
                                        }} 
                                        /></td><td className="name">{item.coordinatingName}</td>
                                        <td className="companyName">{!inputDisabled[i] && item.coordinatingCompany}
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={readValue} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updateCoordinatingList(item); 
                                            setInputDisabled(false);   
                                            readCoordinatingList();        
                                        }}
                                        className="btnSend">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deleteCoordinatingList(item);             
                                        }}
                                        className="btnDelete">Usuń
                                        </button>
                                        <button onClick={() => {           
                                            checkHandler(i);   
                                            setReadValue(register[i].coordinatingCompany);    
                                        }}
                                        className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                        </button></td></tr>
                                )     
                            })
                        }    
                    </tbody>
                </table>
            </div>
        )
}

export default ModalCoordinating;