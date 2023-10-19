import './ModalCompanyName.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const ModalCompanyName = ({setOpenModal, handleAddModal}) => {
 
    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const readCompanyList = () => {

        axios
        .get("workRegister/readNewCompany") 
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
   
    const handleModalDelete = () => {
        axios
        .delete(`workRegister/deleteNewCompany/${itemToDelete._id}`) 
        .then((res) => {       
        if (!res.data.error) {
            const filtered = register.filter((el, i) =>
                i !== register.findIndex((el) => el === itemToDelete)
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
        setOpenModalDelete(false);
    }

    return (
            <div className="modalTwo">
                <div>
                    <div>
                        <p className='xModal' onClick={() => {setOpenModal(() => {return {companyName: false}})}}>X</p>
                    </div> 
                    <div>
                        <h3>Lista firm</h3>
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
                                            handleAddModal(item.companyName, 'companyName'); 
                                        }} 
                                        /></td><td className="name">{item.companyName}</td><td className="action">
                                        <button onClick={() => {
                                            setItemToDelete(item); 
                                            setOpenModalDelete(true);              
                                        }}
                                        className="btn-delete">Usuń
                                        </button></td></tr>
                                )      
                            })}    
                    </tbody>
                </table>
                {openModalDelete && <ModalDelete setOpenModalDelete={setOpenModalDelete} handleModalDelete={handleModalDelete}/>}
            </div>
        )
}

export default ModalCompanyName;