import './ModalPrincipal.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalCompanyName = ({setModalPrincipal, handleAddPrincipal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [updatePrincipalCompany, setUpdatePrincipalCompany] = useState('');

    const readPrincipalList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewPrincipal") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readPrincipalList();   
    }, []);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
        // const filtered = register.find(({principalCompany}) => principalCompany === companyName);
        // const filtered = register.filter((el, i) => el.principalCompany === companyName);
        // console.log("companyName", filtered);
    }, [register]);
   
   
    const deletePrincipalList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewPrincipal/${item._id}`) 
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
        setUpdatePrincipalCompany(e.target.value);
    }

    const updatePrincipalList = (item, dataCompany) => {
        axios
        .post(`http://127.0.0.1:8080/editNewPrincipal/${item._id}`, {principalCompany: dataCompany}) 
        .then(() => {       

        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    const checkHandler = (i) => {
        setInputDisabled(inputDisabled.map((item, index) => {
            // if( index === i) {
            //     return item = !item;
            // } else {
            //     return item = item;
            // }
                
                // index === i ? item = !item : item = item;
              return item = index === i ? !item : item;
        }));
      }

      const filtered = (el) => {
        if(el.principalCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modalPrincipal">
                <div className='topModal'>
                    <h3>Poleceniodawca</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setModalPrincipal(false)}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Poleceniodawca</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {/* {register.filter((el) => el.principalCompany === companyName).map((item, i) => {  */}
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddPrincipal(item.principalName); 
                                        }} 
                                        /></td><td className="name">{item.principalName}</td>
                                        <td className="companyName">{item.principalCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={updatePrincipalCompany} className='companyInput'/>}
                                        {inputDisabled[i] && <button onClick={() => {
                                            updatePrincipalList(item, updatePrincipalCompany); 
                                            setInputDisabled(false);   
                                            readPrincipalList();    
                                            setUpdatePrincipalCompany('');      
                                        }}
                                        className="btn-wyślij">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            deletePrincipalList(item);             
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

export default ModalCompanyName;