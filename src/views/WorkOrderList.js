import './workOrderList.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ModalDelete from "../components/ModalDelete";

const WorkOrderList = () => {

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
        stopDate: ''
    });

    const checkHandler = (i) => {
        setInputDisabled(inputDisabled.map((item, index) => {
              return item = index === i ? !item : item;
        }));
      }

    useEffect(() => {
        setInputDisabled(new Array(register.length).fill(false));
    }, [register]);


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
        .get("http://127.0.0.1:8080/readWorkOrder") 
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
        readWorkOrderList();  
    }, []);

    // useEffect(() => {
    //     console.log('eeee', errors) 
    // }, [errors]);

   
    const handleModalDelete = () => {
        axios
        .delete(`http://127.0.0.1:8080/deleteWorkOrder/${itemToDelete._id}`) 
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
        if (Object.values(readValue).find(item => item === '') ==='') {
            return true;
        } else {
            return false;
        }    
    }

    const editWorkOrderList = (item) => {
        // Object.entries(readValue).map(item => {
        //             if (item[1] === '') {       
        //                 return (
        //                     setErrors( prevErrors => { 
        //                         return {   
        //                         ...prevErrors, 
        //                         [item[0]]: "Brak danych !!!"
        //                     }})
        //                 )    
        //             }
        //     });

            // const found = Object.values(readValue).find(item => item === '');
            // if( found === '') {
            //     return ;
            // }  else {     
        axios
        .post(`http://127.0.0.1:8080/editWorkOrder/${item._id}`, readValue) 
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
            stopDate: item[0].stopDate
        }
        axios
            .post("http://127.0.0.1:8080/addWorkOrder ", workOrder )
            .then((res) => {
                // setAddWorkOrderResponse(res.data.save);
                setError(false);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
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
                            <th className="name">Nazwa firmy</th>
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
                                        <td className={readValue.companyName ==='Brak danych!!!'  ? 'error' : 'name'}>{!inputDisabled[i] && item.companyName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.companyName} name='companyName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.principalName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.principalName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.principalName} name='principalName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.coordinatingName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.coordinatingName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatingName} name='coordinatingName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.coordinatorName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.coordinatorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatorName} name='coordinatorName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.managerName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.managerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.managerName} name='managerName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.supervisorName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.supervisorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.supervisorName} name='supervisorName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.allowerName ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.allowerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.allowerName} name='allowerName' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.startDate ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && (item.startDate)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.startDate} name='startDate' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className={readValue.stopDate ==='Brak danych!!!' ? 'error' : 'name'}>{!inputDisabled[i] && item.stopDate}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.stopDate} name='stopDate' className='inputWorkOrderList' placeholder={handleError() ? 'Brak danych!!!' : ''}/>}
                                        </td>
                                        <td className="action">
                                            <button onClick={() => {
                                                    addCopyWorkOrderItem(register.slice(0,1));
                                                    readWorkOrderList();          
                                                }}
                                                className="btnCopy">Kopiuj
                                            </button>
                                            <button onClick={() => {
                                                    setItemToDelete(item); 
                                                    setOpenModalDelete(true);           
                                                }}
                                                className="btnDelete">Usuń
                                            </button>
                                            <button onClick={() => {           
                                                checkHandler(i);  
                                                setReadValue({
                                                    companyName: register[i].companyName,
                                                    principalName: register[i].principalName,
                                                    coordinatingName: register[i].coordinatingName,
                                                    coordinatorName: register[i].coordinatorName,
                                                    managerName: register[i].managerName,
                                                    supervisorName: register[i].supervisorName,
                                                    allowerName: register[i].allowerName,
                                                    startDate: register[i].startDate,
                                                    stopDate: register[i].stopDate
                                                });  
                                            }}
                                                className="btnUpdate">{!inputDisabled[i] ? "Edytuj" : 'X'}
                                            </button>
                                            {inputDisabled[i] && <button disabled={Object.values(readValue).find(item => item === '') ==='' ? true : false} onClick={() => {
                                                                                editWorkOrderList(item);
                                                                                setInputDisabled(false);   
                                                                                readWorkOrderList();      
                                                                            }}
                                                                    className="btnSendWorkOrderList">Wyślij
                                                                </button>}
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