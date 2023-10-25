import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalGroupTwo = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(24).fill(false));
    const register = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
 
    useEffect(() => {
        handleAddModal(registerGroup.toString(), 'groupTwo'); 
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
                    <p onClick={() => {setOpenModal(() => {return {groupTwo: false}})}}>X</p>
                </div> 
            </div> 
            <div>
                <h3>Grupa 2</h3>
            </div>   
            <table>
                <tbody>
                    <tr><th></th><th className="nameGroup">Urządzenia</th></tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '1') }} />
                                    </td>
                                    <td>1. Kotły parowe oraz wodne na paliwa stałe, płynne i gazowe, o mocy wyższej niż 50 kW i mocy nie wyższej niż 500 kW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '2') }} />
                                    </td>
                                    <td>2. Kotły parowe oraz wodne na paliwa stałe, płynne i gazowe, o mocy wyższej niż 500 kW i o mocy nie wyższej niż 1800 kW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '3') }} />
                                    </td>
                                    <td>3. kotły parowe oraz wodne na paliwa stałe, płynne i gazowe, o mocy wyższej niż 1800 kW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '4') }} />
                                    </td>
                                    <td>4. Sieci i instalacje cieplne wraz z urządzeniami pomocniczymi, o przesyle ciepła wyższym niż 50 kW i o przesyle ciepła nie wyższym niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '5') }} />
                                    </td>
                                    <td>5. Sieci i instalacje cieplne wraz z urządzeniami pomocniczymi, o przesyle ciepła wyższym niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(5, '6') }} />
                                    </td>
                                    <td>6. Turbiny parowe oraz wodne o mocy wyższej niż 50 kW i o mocy nie wyższej niż 15 MW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(6, '7') }} />
                                    </td>
                                    <td>7. Turbiny parowe oraz wodne o mocy wyższej niż 15 MW i o mocy nie wyższej niż 100 MW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[7]}
                                        onChange={() => { handleCheck(7, '8') }} />
                                    </td>
                                    <td>8. Turbiny parowe oraz wodne o mocy wyższej niż 100 MW i o mocy nie wyższej niż 500 MW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[8]}
                                        onChange={() => { handleCheck(8, '9') }} />
                                    </td>
                                    <td>9. Turbiny parowe oraz wodne o mocy wyższej niż 500 MW, wraz z urządzeniami pomocniczymi
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[9]}
                                        onChange={() => { handleCheck(9, '10') }} />
                                    </td>
                                    <td>10. przemysłowe urządzenia odbiorcze pary i gorącej wody o mocy wyższej niż 50 kW i o mocy nie wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[10]}
                                        onChange={() => { handleCheck(10, '11') }} />
                                    </td>
                                    <td>11. Przemysłowe urządzenia odbiorcze pary i gorącej wody o mocy wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[11]}
                                        onChange={() => { handleCheck(11, '12') }} />
                                    </td>
                                    <td>12. Urządzenia wentylacji, klimatyzacji i chłodnicze o mocy wyższej niż 50 kW i o mocy nie wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[12]}
                                        onChange={() => { handleCheck(12, '13') }} />
                                    </td>
                                    <td>13. Urządzenia wentylacji, klimatyzacji i chłodnicze o mocy wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[13]}
                                        onChange={() => { handleCheck(13, '14') }} />
                                    </td>
                                    <td>14. Pompy, ssawy, wentylatory i dmuchawy o mocy wyższej niż 50 kW i o mocy nie wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[14]}
                                        onChange={() => { handleCheck(14, '15') }} />
                                    </td>
                                    <td>15. Pompy, ssawy, wentylatory i dmuchawy o mocy wyższej niż 500 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[15]}
                                        onChange={() => { handleCheck(15, '16') }} />
                                    </td>
                                    <td>16. Sprężarki o mocy wyższej niż 20 kW i o mocy nie wyższej niż 200 kW oraz instalacje sprężonego powietrza i gazów technicznych
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[16]}
                                        onChange={() => { handleCheck(16, '17') }} />
                                    </td>
                                    <td>17. Sprężarki o mocy wyższej niż 200 kW oraz instalacje sprężonego powietrza i gazów technicznych
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[17]}
                                        onChange={() => { handleCheck(17, '18') }} />
                                    </td>
                                    <td>18. Urządzenia do składowania, magazynowania i rozładunku paliw o pojemności składowania odpowiadającej masie ponad 100 Mg
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[18]}
                                        onChange={() => { handleCheck(18, '19') }} />
                                    </td>
                                    <td>19. Piece przemysłowe o mocy wyższej niż 50 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[19]}
                                        onChange={() => { handleCheck(19, '20') }} />
                                    </td>
                                    <td>20. Urządzenia umożliwiające przechowywanie ciepła lub chłodu w celu ich późniejszego wykorzystania o mocy wyższej niż 10 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[20]}
                                        onChange={() => { handleCheck(20, '21') }} />
                                    </td>
                                    <td>21. Aparatura kontrolno-pomiarowa i urządzenia automatycznej regulacji do urządzeń, instalacji i sieci wymienionych w pkt 1–20
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[21]}
                                        onChange={() => { handleCheck(21, '22') }} />
                                    </td>
                                    <td>22. Urządzenia techniki wojskowej lub uzbrojenia
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[22]}
                                        onChange={() => { handleCheck(22, '23') }} />
                                    </td>
                                    <td>23. Urządzenia ratowniczo-gaśnicze
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[23]}
                                        onChange={() => { handleCheck(23, '24') }} />
                                    </td>
                                    <td>24. Urządzenia ochrony granic
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalGroupTwo;