import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalGroupThree = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(8).fill(false));
    const register = ['2', '4', '5', '6', '7', '8', '9', '10'];
 
    useEffect(() => {
        handleAddModal(registerGroup.toString(), 'groupThree'); 
    }, [registerGroup]);

    const handleCheck = (i, value) => {
        setIsChecked(isChecked.map((item, index) => {
            return item = index === i ? !item : item;
        }));
        !isChecked[i] ? setRegisterGroup([...registerGroup, value]) : setRegisterGroup((registerGroup.filter
            (item => { return item !== register[i]}))) 
    }
    
    return (
        <div className="modalGroup">
            <div className='xModal'>
                <div className='xModal1'>
                    <p onClick={() => {setOpenModal(() => {return {groupThree: false}})}}>X</p>
                </div> 
            </div> 
            <div>
                <h3>Grupa 3</h3>
            </div>   
            <table>
                <tbody>
                    <tr><th></th><th className="nameGroup">Urządzenia</th></tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '2') }} />
                                    </td>
                                    <td>2. Urządzenia do przetwarzania i uzdatniania paliw gazowych, rozkładanie paliw gazowych, urzadzenia przeróbki gazu ziemnego, oczyszczalnie gazu, rozprężarnie i rozlewnie gazu płynnego, odazotownie, mieszalnie
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '4') }} />
                                    </td>
                                    <td>4. Sieci gazowe rozdzielcze o ciśnieniu nie wyższym niż 0,5 MPa (gazociągi i punkty redukcyjne, stacje gazowe)
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '5') }} />
                                    </td>
                                    <td>5. Sieci gazowe przesyłowe o ciśnieniu powyżej 0,5 MPa (gazociągi, stacje rozdzielcze, tłocznie gazu)
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '6') }} />
                                    </td>
                                    <td>6. Urządzenia i instalacje gazowe o ciśnieniu nie wyższym niż 5 kPa
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '7') }} />
                                    </td>
                                    <td>7. Urządzenia i instalacje gazowe o ciśnieniu powyżej 5 kPa
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(4, '8') }} />
                                    </td>
                                    <td>8. Przemysłowe odbiorniki paliw gazowych o mocy powyżej 50 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(5, '9') }} />
                                    </td>
                                    <td>9. Turbiny gazowe
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[7]}
                                        onChange={() => { handleCheck(6, '10') }} />
                                    </td>
                                    <td>10. Aparatura kontrolno-pomiarowa, urządzenia sterowania do sieci, urządzeń i instalacji wymienionych w pkt 2,4-9.
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalGroupThree;