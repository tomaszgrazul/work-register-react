import './ModalOfficeName.css'
import axios from "axios";
import { useState, useEffect } from "react";

const ModalOfficeName = ({setOpenModal, handleAddModal}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);

    const readOfficeNameList = () => {

        axios
        .get("http://127.0.0.1:8080/readNewOfficeName") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readOfficeNameList();  
    }, []);
   
    const deleteOfficeNameList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteNewOfficeName/${item._id}`) 
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
            <div className="modalOfficeName">
                <div className='topModal'>
                    <h3>Lista biur</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {officeName: false}})}}>X</p>
                    </div>                  
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Nazwa biura</th><th className="action">Czynność</th></tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}><td><input type="radio" className="radio" value={`option${i}`} checked={isChecked === `option${i}`}
                                        onChange={(e) => {
                                            setIsChecked(e.target.value);
                                            handleAddModal(item.officeName, 'officeName'); 
                                        }} 
                                        /></td><td className="name">{item.officeName}</td><td className="action">
                                        <button onClick={() => {
                                            deleteOfficeNameList(item);             
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

export default ModalOfficeName;