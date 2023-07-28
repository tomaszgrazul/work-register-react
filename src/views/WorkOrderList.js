import './workOrderList.css'
import axios from "axios";
import { useState, useEffect } from "react";

const WorkOrderList = () => {

    const [register, setRegister] = useState([]);
    const [isChecked, setIsChecked] = useState('');
    const [error, setError] = useState(false);

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

    return (
            <div className="workOrderList">
                <div className='topModal'>
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
                                        <td className="name">{item.companyName}</td>
                                        <td className="name">{item.principalName}</td>
                                        <td className="name">{item.coordinatingName}</td>
                                        <td className="name">{item.coordinatorName}</td>
                                        <td className="name">{item.managerName}</td>
                                        <td className="name">{item.supervisorName}</td>
                                        <td className="name">{item.allowerName}</td>
                                        <td className="name">{item.startDate}</td>
                                        <td className="name">{item.stopDate}</td>
                                        <td className="action">
                                            <button onClick={() => {
                                                deleteWorkOrderList(item);             
                                            }}
                                            className="btn-delete">Usuń
                                            </button>
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
