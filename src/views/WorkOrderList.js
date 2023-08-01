import './workOrderList.css'
import axios from "axios";
import { useState, useEffect } from "react";

const WorkOrderList = () => {

    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);
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
    const [errors, setErrors] = useState({
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

        setErrors( {    
            ...errors, 
            [name]: ""
        });
    };

    const readWorkOrderList = () => {

        axios
        .get("http://127.0.0.1:8080/readWorkOrder") 
        .then((res) => { 
            setRegister(res.data);       
        })
        .catch((error) => {
            console.error(error);
        });   
    }

    useEffect(() => {
        readWorkOrderList();  
    }, []);

   
    const deleteWorkOrderList = (item) => {
        axios
        .delete(`http://127.0.0.1:8080/deleteWorkOrder/${item._id}`) 
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

        const updateWorkOrderList = (item) => {
            Object.entries(readValue).map(item => {
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
            }  else {
                    axios
                    .post(`http://127.0.0.1:8080/editWorkOrder/${item._id}`, readValue) 
                    .then(() => {       

                    })
                    .catch((error) => {
                        console.error(error);
                    }); 
          }
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
                                        <td className={errors.companyName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.companyName ? errors.companyName : item.companyName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.companyName ? '' : readValue.companyName} name='companyName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.principalName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.principalName ? errors.principalName : item.principalName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.principalName ? '' : readValue.principalName} name='principalName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.coordinatingName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.coordinatingName ? errors.coordinatingName : item.coordinatingName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.coordinatingName ? '' : readValue.coordinatingName} name='coordinatingName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.coordinatorName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.coordinatorName ? errors.coordinatorName : item.coordinatorName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.coordinatorName ? '' : readValue.coordinatorName} name='coordinatorName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.managerName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.managerName ? errors.managerName : item.managerName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.managerName ? '' : readValue.managerName} name='managerName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.supervisorName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.supervisorName ? errors.supervisorName : item.supervisorName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.supervisorName ? '' : readValue.supervisorName} name='supervisorName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.allowerName ? 'error' : 'name'}>{!inputDisabled[i] && (errors.allowerName ? errors.allowerName : item.allowerName)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={errors.allowerName ? '' : readValue.allowerName} name='allowerName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.startDate ? 'error' : 'name'}>{!inputDisabled[i] && (errors.startDate ? errors.startDate : item.startDate)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={errors.startDate ? '' : readValue.startDate} name='startDate' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className={errors.stopDate ? 'error' : 'name'}>{!inputDisabled[i] && (errors.stopDate ? errors.stopDate : item.stopDate)}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={errors.stopDate ? '' : readValue.stopDate} name='stopDate' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="action">
                                            <button onClick={() => {
                                                    deleteWorkOrderList(item);             
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
                                            {inputDisabled[i] && <button onClick={() => {
                                                                                updateWorkOrderList(item); 
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
            </div>
        )
}

export default WorkOrderList;
