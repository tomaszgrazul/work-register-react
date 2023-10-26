import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalGroupOne = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(16).fill(false));
    const register = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
 
    useEffect(() => {
        handleAddModal(registerGroup.toString(), 'groupOne'); 
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
                    <p onClick={() => {setOpenModal(() => {return {groupOne: false}})}}>X</p>
                </div> 
            </div> 
            <div>
                <h3>Grupa 1</h3>
            </div>   
            <table>
                <tbody>
                    <tr><th></th><th className="nameGroup">Urządzenia</th></tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '1') }} />
                                    </td>
                                    <td>1. Urządzenia prądotwórcze przyłączone do sieci przesyłowej lub dystrybucyjnej energii elektrycznej bez względu na wysokość napięcia znamionowego
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '2') }} />
                                    </td>
                                    <td>2. Urządzenia, instalacje i sieci elektroenergetyczne o napięciu znamionowym nie wyższym niż 1 kV;
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '3') }} />
                                    </td>
                                    <td>3. Urządzenia, instalacje i sieci elektroenergetyczne o napięciu znamionowym wyższym niż 1 kV i napięciu znamionowym nie wyższym niż 30 kV
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '4') }} />
                                    </td>
                                    <td>4. Urządzenia, instalacje i sieci elektroenergetyczne o napięciu znamionowym wyższym niż 30 kV i napięciu znamionowym nie wyższym niż 110 kV
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '5') }} />
                                    </td>
                                    <td>5. Urządzenia, instalacje i sieci elektroenergetyczne o napięciu znamionowym wyższym niż 110 kV
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(5, '6') }} />
                                    </td>
                                    <td>6. Zespoły prądotwórcze o mocy wyższej niż 50 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(6, '7') }} />
                                    </td>
                                    <td>7. Urządzenia elektrotermiczne
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[7]}
                                        onChange={() => { handleCheck(7, '8') }} />
                                    </td>
                                    <td>8. Urządzenia do elektrolizy
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[8]}
                                        onChange={() => { handleCheck(8, '9') }} />
                                    </td>
                                    <td>9. Sieci elektrycznego oświetlenia ulicznego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[9]}
                                        onChange={() => { handleCheck(9, '10') }} />
                                    </td>
                                    <td>10. Elektryczna sieć trakcyjna
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[10]}
                                        onChange={() => { handleCheck(10, '11') }} />
                                    </td>
                                    <td>11. Elektryczne urządzenia w wykonaniu przeciwwybuchowym
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[11]}
                                        onChange={() => { handleCheck(11, '12') }} />
                                    </td>
                                    <td>12. Urządzenia umożliwiające magazynowanie energii elektrycznej i jej wprowadzanie do sieci elektroenergetycznej o mocy wyższej niż 10 kW
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[12]}
                                        onChange={() => { handleCheck(12, '13') }} />
                                    </td>
                                    <td>13. Aparatura kontrolno-pomiarowa oraz urządzenia i instalacje automatycznej regulacji, sterowania i zabezpieczeń urządzeń i instalacji wymienionych w pkt 1–12
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[13]}
                                        onChange={() => { handleCheck(13, '14') }} />
                                    </td>
                                    <td>14. Urządzenia techniki wojskowej lub uzbrojenia
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[14]}
                                        onChange={() => { handleCheck(14, '15') }} />
                                    </td>
                                    <td>15. Urządzenia ratowniczo-gaśnicze
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[15]}
                                        onChange={() => { handleCheck(15, '16') }} />
                                    </td>
                                    <td>16. Urządzenia ochrony granic
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalGroupOne;