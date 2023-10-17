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
    const [readValue, setReadValue] = useState('');
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

    useEffect(() => {
        readTeamMemberList();   
    }, []);

    useEffect(() => {
        console.log('qqqq', registerTeam)
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

    const handleInputCompany = (e) => {
        setReadValue(e.target.value);
    }

    const updateTeamMemberList = (item) => {
            axios
            .post(`teamMember/editTeamMember/${item._id}`, {teamMemberCompany: readValue}) 
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
            <div className="modalTeam">
                <div className='topModal'>
                    <h3>Zespół</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setOpenModal(() => {return {supervisorName: false}})}}>X</p>
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
                                                !isChecked[i] ? setRegisterTeam([...registerTeam, item.teamMember]) : registerTeam.splice(i,1)
                                                handleAddModal(item.teamMember, 'teamMember'); 
                                            }} 
                                        /></td>
                                        <td className="name">{item.teamMember}</td>
                                        <td className="companyName">{!inputDisabled[i] && item.teamMemberCompany} 
                                        {inputDisabled[i] && <input onChange={handleInputCompany} type="text" value={readValue} className='companyInput' placeholder={readValue==='' ? 'Brak danych!!!' : ''}/>}
                                        {inputDisabled[i] && <button disabled={readValue==='' ? true : false} onClick={() => {
                                            updateTeamMemberList(item); 
                                            readTeamMemberList();   
                                        }}
                                        className="btnSend">Wyślij
                                        </button>}</td>
                                        <td className="action">
                                        <button onClick={() => {
                                            setItemToDelete(item); 
                                            setOpenModalDelete(true);             
                                        }}
                                        className="btnDelete">Usuń
                                        </button>
                                        <button onClick={() => {           
                                            checkHandler(i); 
                                            setReadValue(register[i].teamMemberCompany);       
                                        }}
                                        className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                        </button></td></tr>
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




// import '../components/ModalTeam.css'
// import { useState, useEffect } from "react";
// import axios from 'axios';
// import ModalDelete from "../components/ModalDelete";

// const ModalTeam = ({setOpenModal, handleAddModal, companyName}) => {


//     const [openModalDelete, setOpenModalDelete] = useState(false);
//     const [register, setRegister] = useState([]);
//     const [error, setError] = useState(false);

//     const handleModalDelete = (item) => {
//         axios
//         .delete(`teamMember/deleteTeamMember/${item._id}`) 
//         .then((res) => {       
//         if (!res.data.error) {
//             const filtered = register.filter((el, i) =>
//                 i !== register.findIndex((el) => el === item)
//             );
//             setRegister(filtered);
//             setError(false);
//             } else {
//                 setError(true);
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         }); 
//         setOpenModalDelete(false);
//     }

//     const readTeamMemberList = () => {
//         axios
//         .get("teamMember/readTeamMember") 
//         .then((res) => { 
//             setRegister(res.data); 
//             setError(false);     
//         })
//         .catch((error) => {
//             console.error(error);
//             setError(true);
//         });   
//     }

//     useEffect(() => {
//         readTeamMemberList();  
//     }, []);

//     // const addTeamMember = () => {
//     //     let newteamMember = {
//     //         teamMember: readValue.teamMember,
//     //         company: readValue.company
//     //     }

//     //     Object.entries(newteamMember).map(item => {
//     //         if (item[1] === '') {       
//     //             return (
//     //                 setErrors( prevErrors => { 
//     //                     return {   
//     //                     ...prevErrors, 
//     //                     [item[0]]: "Brak danych !!!"
//     //                 }})
//     //             )    
//     //         }
//     //     });

//     //     const found = Object.values(readValue).find(item => item === '');
//     //     if( found === '') {
//     //         return ;
//     //     }

//     //     axios
//     //         .post("teamMember/addTeamMember ", newteamMember )
//     //         .then((res) => {
//     //             // setAddWorkOrderResponse(res.data.save);
//     //             setError(false);
//     //             readTeamMemberList();
//     //         })
//     //         .catch((error) => {
//     //             console.error(error);
//     //             setError(true);
//     //         });
//     // }

//     const handleValueChange = (e) => {
//         const target = e.target;
//         const name = e.target.name;

//         setReadValue ({
//             ...readValue,
//             [name]: target.value,
//         });

//         setErrors( {    
//             ...errors, 
//             [name]: ""
//         });
//     };

//     const [errors, setErrors] = useState({
//         teamMember: '',
//         company: ''
//     });

//     const [readValue, setReadValue] = useState({
//         teamMember: '',
//         company: ''
//     });

//     return (
//         <div className="modalTeam">
//             <div className='topModal'>
//                 <h3>Lista członków zespołu</h3>
//                 <div>
//                     <p className='ex-modal' onClick={() => {setOpenModal(() => {return {team: false}})}}>X</p>
//                 </div>   
//             </div> 
//             <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
//             {/* <div className='block'>
//                 <input onChange={handleValueChange} value={readValue.company} type="text" placeholder={errors.company ? errors.company : 'Nazwa firmy'} name="company" />
//                 <input onChange={handleValueChange} value={readValue.teamMember} type="text" placeholder={errors.teamMember ? errors.teamMember : 'Imię i Nazwisko'} name="teamMember" />
//                         <button onClick={(e) => {
//                             e.preventDefault();
//                             addTeamMember();
//                         }}>Dodaj</button>
//             </div> */}
//             <table>
//                 <tbody>
//                     <tr>
//                         <th className="lp">LP</th> 
//                         <th className="name">Imię i Nazwisko</th>
//                         <th className="name">Nazwa firmy</th>
//                         <th className="action">Czynność</th>
//                     </tr>
//                     {register.map((item, i) => {
//                             return (
//                                 <tr key={i}>
//                                     <td>{i+1}</td>

//                                     <td>{item.teamMember}
//                                     </td>

//                                     <td className='name'> {item.company}
//                                     </td>
                                    
//                                     <td className="action">
//                                         <button onClick={() => {  
//                                                 setOpenModalDelete(true); 
//                                                 handleModalDelete(item);         
//                                             }}
//                                             className="btnDelete">Usuń
//                                         </button>
//                                     </td>
//                                 </tr>
//                             )      
//                         })}    
//                 </tbody>
//             </table>
//             {openModalDelete && <ModalDelete setOpenModalDelete={setOpenModalDelete} handleModalDelete={handleModalDelete}/>}
//         </div>
//     )
// }

// export default ModalTeam;