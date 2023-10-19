import './ModalTeam.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const ModalTeam = ({setOpenModal, handleAddModal, companyName}) => {
 
    const [register, setRegister] = useState([]);
    const [registerTeam, setRegisterTeam] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const [error, setError] = useState(false);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [readValue, setReadValue] = useState({
        teamMember: '',
        teamMemberCompany: ''
    });
    const [itemToDelete, setItemToDelete] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const readTeamMemberList = () => {
        axios
        .get("teamMember/readTeamMember") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    const loadReadValue = (i) => {
        setReadValue({
            teamMember: register[i].teamMember,
            teamMemberCompany: register[i].teamMemberCompany
        }); 
    }

    useEffect(() => {
        readTeamMemberList();   
    }, []);

    useEffect(() => {
        handleAddModal(registerTeam, 'teamMember'); 
    }, [isChecked]);

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
        setIsChecked(new Array(register.length).fill(false));
    }, [register]);
   
   
    const handleModalDelete = () => {
        axios
        .delete(`teamMember/deleteTeamMember/${itemToDelete._id}`) 
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

    const handleValueChange = (e) => {
        const target = e.target;
        const name = e.target.name;

        setReadValue ({
            ...readValue,
            [name]: target.value
        });
    };

    const updateTeamMemberList = (item) => {
            axios
            .post(`teamMember/editTeamMember/${item._id}`, readValue) 
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
        if(el.teamMemberCompany === companyName) {
            return el;
        } 
        if(companyName === "") {
            return el;
        } 
      }

    return (
            <div className="modal">
                <div>
                    <div className='xModal'>
                        <p onClick={() => {setOpenModal(() => {return {supervisorName: false}})}}>X</p>
                    </div>  
                    <div>
                        <h3>Zespół</h3>
                    </div>   
                </div>
                <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Imię i nazwisko</th><th className="companyName">Nazwa firmy</th><th className="action">Czynność</th></tr>
                        {register.filter(filtered).map((item, i) => {
                                return ( 
                                    <tr key={i}>
                                        <td><input type="checkbox" className="checkbox" checked={isChecked[i]}
                                            onChange={(e) => {
                                                setIsChecked(isChecked.map((item, index) => {
                                                    return item = index === i ? !item : item;
                                                }));
                                                !isChecked[i] ? setRegisterTeam([...registerTeam, item.teamMember]) : setRegisterTeam(registerTeam.filter
                                                (item => { return item !== register[i].teamMember }))               
                                            }} 
                                        /></td>
                                        <td className="tableName">{!inputDisabled[i] && item.teamMember}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.teamMember} className='input' name='teamMember' placeholder={readValue.teamMember ==='' ? 'Brak danych!!!' : ''}/>}  
                                        </td>
                                        <td className="tableName">{!inputDisabled[i] && item.teamMemberCompany} 
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.teamMemberCompany} className='input' name='teamMemberCompany' placeholder={readValue.teamMemberCompany ==='' ? 'Brak danych!!!' : ''}/>}                                          
                                        </td>
                                        <td className="action">
                                            <button onClick={() => {
                                                setItemToDelete(item); 
                                                setOpenModalDelete(true);             
                                            }}
                                            className="btnDelete">Usuń
                                            </button>
                                            <button onClick={() => {           
                                                checkHandler(i); 
                                                loadReadValue(i);        
                                            }}
                                            className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                            </button>
                                              {inputDisabled[i] && <button disabled={Object.values(readValue).find(item => item === '') ==='' ? true : false} onClick={() => {
                                                updateTeamMemberList(item); 
                                                readTeamMemberList();   
                                            }}
                                            className="btnSend">Wyślij
                                            </button>}
                                        </td></tr>
                                )     
                            })
                        }    
                    </tbody>
                </table>
                {openModalDelete && <ModalDelete setOpenModalDelete={setOpenModalDelete} handleModalDelete={handleModalDelete}/>}
            </div>
        )
}

export default ModalTeam;