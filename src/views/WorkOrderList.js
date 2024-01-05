import './workOrderList.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const WorkOrderList = (props) => {
        
    const [itemToDelete, setItemToDelete] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [error, setError] = useState(false);
    const [register, setRegister] = useState([]);
    const [inputDisabled, setInputDisabled] = useState([false]);
    const [readValue, setReadValue] = useState({
        companyName: '',
        officeName: '',
        principalName: '',
        coordinatingName: '',
        coordinatorName: '',
        managerName: '',
        supervisorName: '',
        allowerName: '',
        startDate: '',
        stopDate: '',
        numberRegistration: '',
        createdBy: '',
        editBy: ''
    });

    const checkHandler = (i) => {
        setInputDisabled(inputDisabled.map((item, index) => {
              return item = index === i ? !item : item;
        }));
      }

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);

    useEffect(() => {
        readWorkOrderList();  
    }, []);

  
     const handleValueChange = (e) => {
        const target = e.target;
        const name = e.target.name;

        setReadValue ({
            ...readValue,
            [name]: target.value
        });
    };

    const readWorkOrderList = () => {
        axios
        .get("workOrder/readWorkOrder") 
        .then((res) => { 
            setRegister(res.data); 
            setError(false);     
        })
        .catch((error) => {
            console.error(error);
            setError(true);
        });   
    }

    //  useEffect(() => {
    //     console.log('eeee', readValue.editBy);
    // }, [readValue]);

   
    const handleModalDelete = () => {
        axios
        .delete(`workOrder/deleteWorkOrder/${itemToDelete._id}`) 
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
  
    const handleError = () => {
        // if (Object.values(readValue).find(item => item === '') ==='') {
        //     return true;
        // } else {
        //     return false;
        // }    
        return Object.values(readValue).find(item => item === '') === '' ? true : false;
    }

    const editWorkOrderList = (item) => {
        // console.log('aaa', readValue)
        axios
        .post(`workOrder/editWorkOrder/${item._id}`, readValue) 
        .then(() => {       
            setError(false); 
                    })
        .catch((error) => {
            console.error(error);
            setError(true);
        }); 
    }

    const addCopyWorkOrderItem = (item) => {
        let workOrder = {
            companyName: item[0].companyName,
            officeName: item[0].officeName,
            principalName: item[0].principalName,
            coordinatingName: item[0].coordinatingName,
            coordinatorName: item[0].coordinatorName,
            managerName: item[0].managerName,
            supervisorName: item[0].supervisorName,
            allowerName: item[0].allowerName,
            startDate: item[0].startDate,
            stopDate: item[0].stopDate,
            createdBy: item[0].createdBy,
            editBy: item[0].editBy
        }
        axios
            .post("workOrder/addWorkOrder ", workOrder )
            .then((res) => {
                // setAddWorkOrderResponse(res.data.save);
                setError(false);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }

    const loadReadValue = (i) => {
        setReadValue({
            companyName: register[i].companyName,
            officeName: register[i].officeName,
            principalName: register[i].principalName,
            coordinatingName: register[i].coordinatingName,
            coordinatorName: register[i].coordinatorName,
            managerName: register[i].managerName,
            supervisorName: register[i].supervisorName,
            allowerName: register[i].allowerName,
            startDate: register[i].startDate,
            stopDate: register[i].stopDate,
            numberRegistration: register[i].numberRegistration,
            createdBy: register[i].createdBy,
            editBy: register[i].editBy
        }); 
    }

    const addNumberRegistration = (item) => {
        axios
        .post(`workOrder/editWorkOrder/${item._id}`, {numberRegistration: `${item.officeName}/2023`}) 
        .then(() => {       
            setError(false); 
        })
        .catch((error) => {
            console.error(error);
            setError(true);
         }); 
    }

    const setEditBy = () => {
        setReadValue(Object.entries(readValue).map(() => {
            return readValue.editBy = props.user.user;
        }));        
    }


    return (
            <div className="workOrderList">
                <div className='header'>
                    <h3>Lista poleceń</h3>
                </div>
                <p className={error ? 'error' : 'noErrorWorkOrderList'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p>
                <table>
                    <tbody>
                        <tr>
                            <th className="lp">LP</th>
                            <th className="name">Nr rej.</th>
                            <th className="name">Nazwa firmy</th>
                            <th className="name">Nazwa biura</th>
                            <th className="name">Poleceniodawca</th>
                            <th className="name">Kordynujący</th>
                            <th className="name">Koordynator</th>
                            <th className="name">Dopuszczający</th>
                            <th className="name">Kierujący zespołem</th>
                            <th className="name">Nadzór eksploatacyjny</th>
                            <th className="name">Rozpoczęcie pracy</th>
                            <th className="name">Zakończenie pracy</th>
                            <th className="action">Czynność</th>
                        </tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td className={readValue.numberRegistration === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.numberRegistration}
                                            {(inputDisabled[i] && props.user.user === 'admin') && <input onChange={handleValueChange} type="text" value={readValue.numberRegistration} name='numberRegistration' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.companyName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.companyName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.companyName} name='companyName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.officeName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.officeName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.officeName} name='officeName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.principalName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.principalName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.principalName} name='principalName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.coordinatingName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.coordinatingName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatingName} name='coordinatingName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.coordinatorName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.coordinatorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatorName} name='coordinatorName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.managerName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.managerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.managerName} name='managerName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.supervisorName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.supervisorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.supervisorName} name='supervisorName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.allowerName === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.allowerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.allowerName} name='allowerName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.startDate === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && (item.startDate)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.startDate} name='startDate' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.stopDate === 'Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.stopDate}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.stopDate} name='stopDate' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className="action">
                                            <button onClick={() => {
                                                    addCopyWorkOrderItem(register.slice(i));
                                                    readWorkOrderList();        
                                                }}
                                                className="btnCopy">Kopiuj
                                            </button>
                                            <button disabled={props.user.user === 'admin' ? false : item.numberRegistration ? true : false} onClick={() => {  
                                                    setItemToDelete(item); 
                                                    setOpenModalDelete(true);          
                                                }}
                                                className="btnDelete">Usuń
                                            </button>
                                            <button disabled={props.user.user === 'admin' ? false : item.numberRegistration ? true : false} onClick={() => {           
                                                checkHandler(i);  
                                                loadReadValue(i);    
                                            }}
                                                className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                            </button>
                                            {/* {inputDisabled[i] && <button disabled={Object.values(readValue).filter((item, index) => {return index !== 10}).find(item => item === '') ==='' ? true : false} onClick={() => {                                      */}
                                            {inputDisabled[i] && <button disabled={Object.values(readValue).find(item => item === '') ==='' ? true : false} onClick={() => { 
                                                                setEditBy();
                                                                editWorkOrderList(item);
                                                                setInputDisabled(false);   
                                                                readWorkOrderList();      
                                                                }}
                                                                className="btnSendWorkOrderList">Wyślij
                                                                </button>}
                                            <button disabled={item.numberRegistration ? true : false} onClick={() => {
                                                addNumberRegistration(item);
                                                readWorkOrderList();
                                                }}
                                                className="btnRegistration">Rejestruj
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

export default WorkOrderList;
