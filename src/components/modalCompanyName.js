import './ModalCompanyName.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalCompanyName = ({setModalCompanyName, handleAddCompanyName, handleReadCompanyNumber}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);

    const readCompanyList = () => {

        axios
        .get("http://127.0.0.1:8080/index") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readCompanyList();  
    }, []);
   
    const deleteCompanyList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/delete/${item._id}`) 
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

    return (
            <div className="modalCompanyName">
                <div className='topModal'>
                    <h3>Lista firm</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setModalCompanyName(false)}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Firma</th><th className="action">Czynność</th></tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddCompanyName(item.companyName); 
                                        }} 
                                        /></td><td className="name">{item.companyName}</td><td className="action">
                                        <button onClick={() => {
                                            deleteCompanyList(item);             
                                        }}
                                        className="btn-delete">Usuń
                                        </button></td></tr>
                                )      
                            })}    
                    </tbody>
                </table>
            </div>
        )
}

export default ModalCompanyName;