import './ModalNumberOfAgreement.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalNumberOfAgreement = ({setOpenModal, handleAddModal}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);

    const readNumberOfAgreement= () => {

        axios
        .get("http://127.0.0.1:8080/readNumberOfAgreemnet") 
        .then((res) => { 
            setRegister(res.data);      
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readNumberOfAgreement();  
    }, []);
   
    const deleteNumberOfAgreement = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNumberOfAgreemnet/${item._id}`) 
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
            <div className="modalNumberOfAgreement">
                <div className='topModal'>
                    <h3>Lista porozumień</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {numberOfAgreement: false}})}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Numer porozumienia</th><th className="action">Czynność</th></tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.numberOfAgreement, 'numberOfAgreement'); 
                                        }} 
                                        /></td><td className="name">{item.numberOfAgreement}</td><td className="action">
                                        <button onClick={() => {
                                            deleteNumberOfAgreement(item);             
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

export default ModalNumberOfAgreement;