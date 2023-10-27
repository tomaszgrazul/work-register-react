import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalGroupThree = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(15).fill(false));
    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const register = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
 
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
                    <tr><th><input type="checkbox" className="checkbox" checked={isCheckedOne} onChange={ () => {
                        if (!isCheckedOne) {
                            setIsChecked(isChecked.fill(true,0,15));
                            setRegisterGroup(register);
                        } else {
                            setIsChecked(new Array(16).fill(false));
                            setRegisterGroup('');
                        }
                        setIsCheckedOne(prevCheck => !prevCheck);
                    }   } /></th><th className="nameGroup">Urządzenia</th></tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '1') }} />
                                    </td>
                                    <td>1. Urządzenia do produkcji paliw gazowych, generatory gazu
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '2') }} />
                                    </td>
                                    <td>2. Urządzenia do przetwarzania i uzdatniania paliw gazowych, rozkładnie paliw gazowych, urządzenia przeróbki gazu ziemnego, oczyszczalnie gazu, rozprężalnie i rozlewnie gazu płynnego, odazotownie, mieszalnie
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '3') }} />
                                    </td>
                                    <td>3. Urządzenia do magazynowania paliw gazowych
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '4') }} />
                                    </td>
                                    <td>4. Sieci gazowe rozdzielcze o ciśnieniu nie wyższym niż 0,5 MPa (gazociągi i punkty redukcyjne, stacje gazowe)
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '5') }} />
                                    </td>
                                    <td>5. Sieci gazowe przesyłowe o ciśnieniu powyżej 0,5 MPa (gazociągi, stacje rozdzielcze, tłocznie gazu)
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(5, '6') }} />
                                    </td>
                                    <td>6. Urządzenia i instalacje gazowe o ciśnieniu nie wyższym niż 5 kPa
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(6, '7') }} />
                                    </td>
                                    <td>7. Urządzenia i instalacje gazowe o ciśnieniu powyżej 5 kPa
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[7]}
                                        onChange={() => { handleCheck(7, '8') }} />
                                    </td>
                                    <td>8. Przemysłowe odbiorniki paliw gazowych o mocy powyżej 50 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[8]}
                                        onChange={() => { handleCheck(8, '9') }} />
                                    </td>
                                    <td>9. Turbiny gazowe
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[9]}
                                        onChange={() => { handleCheck(9, '10') }} />
                                    </td>
                                    <td>10. Aparatura kontrolno-pomiarowa, urządzenia sterowania do sieci, urządzeń i instalacji wymienionych w pkt 1-9.
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[10]}
                                        onChange={() => { handleCheck(10, '11') }} />
                                    </td>
                                    <td>11. Urządzenia i instalacje do skraplania gazu ziemnego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[11]}
                                        onChange={() => { handleCheck(11, '12') }} />
                                    </td>
                                    <td>12. Urządzenia i instalacje do regazyfikacji skroplonego gazu ziemnego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[12]}
                                        onChange={() => { handleCheck(12, '13') }} />
                                    </td>
                                    <td>13. Instalacje do tankowania sprężonego gazu ziemnego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[13]}
                                        onChange={() => { handleCheck(13, '14') }} />
                                    </td>
                                    <td>14. Instalacje do tankowania skroplonego gazu ziemnego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[14]}
                                        onChange={() => { handleCheck(14, '15') }} />
                                    </td>
                                    <td>15. Urządzenia techniki wojskowej lub uzbrojenia
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalGroupThree;