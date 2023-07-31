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

        // setErrors( {    
        //     ...errors, 
        //     [name]: ""
        // });
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
        axios
        .post(`http://127.0.0.1:8080/editWorkOrder/${item._id}`, readValue) 
        .then(() => {       

        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    return (
            <div className="workOrderList">
                <div className='header'>
                    <h3>Lista poleceń</h3>
                </div>
                {/* <p className={error ? 'error' : 'noError'}>{error ? 'Wystąpił błąd. Spróbuj jeszcze raz!' : '-'}</p> */}
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
                                        <td className="name">{!inputDisabled[i] && item.companyName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.companyName} name='companyName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.principalName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.principalName} name='principalName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.coordinatingName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatingName} name='coordinatingName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.coordinatorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.coordinatorName} name='coordinatorName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.managerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.managerName} name='managerName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.supervisorName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.supervisorName} name='supervisorName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.allowerName}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="text" value={readValue.allowerName} name='allowerName' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.startDate}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.startDate} name='startDate' className='inputWorkOrderList'/>}
                                        </td>
                                        <td className="name">{!inputDisabled[i] && item.stopDate}
                                            {inputDisabled[i] && <input onChange={handleValueChange} type="datetime-local" value={readValue.stopDate} name='stopDate' className='inputWorkOrderList'/>}
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
