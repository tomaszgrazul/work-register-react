import './modalCompanyName.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalCompanyName = ({setModalCompanyName, handleAddCompanyName, companyNumber, handleReadCompanyNumber}) => {
// function ModalCompanyName({setModalCompanyName, handleAddCompanyName, companyNumber, handleReadCompanyNumber}) {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(companyNumber).fill(false));
    const [error, setError] = useState(false);

    const checkHandler = (i) => {
        setIsChecked(isChecked.map((item, index) => {
            if( index === i) {
                return item = !item;
            } else 
                return item = item;
        }));
      }

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
                                    <tr key={i}><td><input type="checkbox" className="checkbox" checked={isChecked[i]}
                                        onChange={() => {
                                            isChecked.map((item) => {
                                                if( item ) {
                                                    isChecked[i] = true;
                                                } 
                                                return checkHandler(i);
                                            })
                                            handleAddCompanyName(item.companyName, isChecked, i); 
                                        }} 
                                        /></td><td className="name">{item.companyName}</td><td className="action">
                                        <button onClick={() => {

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
                                                    handleReadCompanyNumber();
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                });       
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