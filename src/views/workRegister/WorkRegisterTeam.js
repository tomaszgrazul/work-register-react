import '../../views/workRegister/workRegisterTeam.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import ModalDelete from "../../components/ModalDelete";

const WorkRegisterTeam = () => {


    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [register, setRegister] = useState([]);
    const [error, setError] = useState(false);

    const handleModalDelete = (item) => {
        axios
        .delete(`teamMember/deleteTeamMember/${item._id}`) 
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
        setOpenModalDelete(false);
    }

    const readTeamMemberList = () => {
        axios
        .get("teamMember/readTeamMember") 
        .then((res) => { 
            setRegister(res.data); 
            setError(false);     
        })
        .catch((error) => {
            console.error(error);
            setError(true);
        });   
    }

    useEffect(() => {
        readTeamMemberList();  
    }, []);

    const addTeamMember = () => {
        let newteamMember = {
            teamMember: readValue.teamMember,
            company: readValue.company
        }

        Object.entries(newteamMember).map(item => {
            if (item[1] === '') {       
                return (
                    setErrors( prevErrors => { 
                        return {   
                        ...prevErrors, 
                        [item[0]]: "Brak danych !!!"
                    }})
                )    
            }
        });

        const found = Object.values(readValue).find(item => item === '');
        if( found === '') {
            return ;
        }

        axios
            .post("teamMember/addTeamMember ", newteamMember )
            .then((res) => {
                // setAddWorkOrderResponse(res.data.save);
                setError(false);
                readTeamMemberList();
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }

    const handleValueChange = (e) => {
        const target = e.target;
        const name = e.target.name;

        setReadValue ({
            ...readValue,
            [name]: target.value,
        });

        setErrors( {    
            ...errors, 
            [name]: ""
        });
    };

    const [errors, setErrors] = useState({
        teamMember: '',
        company: ''
    });

    const [readValue, setReadValue] = useState({
        teamMember: '',
        company: ''
    });

    return (
        <div className="workRegisterTeam">
            <div className='header'>
                <h3>Lista członków zespołu</h3>
            </div>
            <p className={error ? 'error' : 'noErrorWorkRegisterTeam'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
            <div className='block'>
                <input onChange={handleValueChange} value={readValue.company} type="text" placeholder={errors.company ? errors.company : 'Nazwa firmy'} name="company" />
                <input onChange={handleValueChange} value={readValue.teamMember} type="text" placeholder={errors.teamMember ? errors.teamMember : 'Imię i Nazwisko'} name="teamMember" />
                        <button onClick={(e) => {
                            e.preventDefault();
                            addTeamMember();
                        }}>Dodaj</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th className="lp">LP</th>
                        <th className="name">Nazwa firmy</th>
                        <th className="name">Imię i Nazwisko</th>
                        <th className="action">Czynność</th>
                    </tr>
                    {register.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>

                                    <td className='name'> {item.company}
                                    </td>

                                    <td>{item.teamMember}
                                    </td>
                                    
                                    <td className="action">
                                        <button onClick={() => {  
                                                setOpenModalDelete(true); 
                                                handleModalDelete(item);         
                                            }}
                                            className="btnDelete">Usuń
                                        </button>
                                    </td>
                                </tr>
                            )      
                        })}    
                </tbody>
            </table>
            {openModalDelete && <ModalDelete setOpenModalDelete={setOpenModalDelete} handleModalDelete={handleModalDelete}/>}
        </div>
    )
}

export default WorkRegisterTeam;