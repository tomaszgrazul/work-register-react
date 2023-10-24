import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalGroupOne = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(7).fill(false));
 
    useEffect(() => {
        handleAddModal(registerGroup, 'groupOne'); 
        console.log(registerGroup)
        console.log(isChecked)
    }, [registerGroup]);

    const handleCheck = (i, value) => {
        setIsChecked(isChecked.map((item, index) => {
            return item = index === i ? !item : item;
        }));
        !isChecked[i] ? setRegisterGroup([...registerGroup, value]) : setRegisterGroup((registerGroup.filter
            (item => { return item !== registerGroup[i]}))) 
        console.log('numer ', [i], 'reg ', registerGroup[i]);
    }
    
    return (
        <div className="modalGroup">
            <div>
                <div className='xModal'>
                    <p onClick={() => {setOpenModal(() => {return {groupOne: false}})}}>X</p>
                </div>  
                <div>
                    <h3>Grupa 1</h3>
                </div>   
            </div>
            <table>
                <tbody>
                    <tr><th></th><th className="nameGroup">Urządzenia</th></tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '2') }} />
                                    </td>
                                    <td>2. Urządzenia, instalacje i sieci elektroenergetyczne o napięciu nie wyższym niż 1 kV
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '3') }} />
                                    </td>
                                    <td>3. Urządzenia, instalacje i sieci o napięciu powyżej 1 kV
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '4') }} />
                                    </td>
                                    <td>4. Zespoły prądotwórcze o mocy 50 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '5') }} />
                                    </td>
                                    <td>5. Urzadzenia elektrotermiczne
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '7') }} />
                                    </td>
                                    <td>7. Sieci elektrycznego oświetlenia ulicznego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(5, '9') }} />
                                    </td>
                                    <td>9. Elektryczne urządzenia w wykonaniu przeciwwybuchowym
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(6, '10') }} />
                                    </td>
                                    <td>10. Aparatura kontrolno-pomiarowa oraz urządzenia i instalacje automatycznej regulacji, sterowania i zabezpieczeń urządzeń i instalacji wymienionych w pkt. 2-5,7,9
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalGroupOne;