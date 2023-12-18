import './ModalGroup.css';
import { useState, useEffect } from "react";

const ModalWorkOtherD = ({setOpenModal, handleAddModal}) => {

    const [registerGroup, setRegisterGroup] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(7).fill(false));
    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const register = ['1', '2', '3', '4', '5', '6', '7'];
 
    useEffect(() => {
        handleAddModal(registerGroup.toString(), 'workOtherD');      
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
                    <p onClick={() => {setOpenModal(() => {return {workOtherD: false}})}}>X</p>
                </div> 
            </div> 
            {/* <div>
                <h3>Prace Gazoniebezpieczne</h3>
            </div>    */}
            <table>
                <tbody>
                    <tr><th><input type="checkbox" className="checkbox" checked={isCheckedOne} onChange={ () => {
                        if (!isCheckedOne) {
                            setIsChecked(new Array(7).fill(true));
                            setRegisterGroup(register);
                        } else {
                            setIsChecked(new Array(7).fill(false));
                            setRegisterGroup('');
                        }
                        setIsCheckedOne(prevCheck => !prevCheck);
                    }   } /></th><th className="nameGroup">Prace szczególnie niebezpieczne</th></tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[0]}
                                        onChange={() => { handleCheck(0, '1') }} />
                                    </td>
                                    <td>1. Prace w pomieszczeniach i przestrzeniach, w których występuje zagrożenie przekroczenia najwyższego dopuszczalnego stężenia czynnika szkodliwego dla zdrowia ludzkiego lub przekroczenia dolnej granicy wybuchowości czynnika wybuchowego
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[1]}
                                        onChange={() => { handleCheck(1, '2') }} />
                                    </td>
                                    <td>2. Prace w nawanialniach i w magazynach środka nawaniającego gaz ziemny
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[2]}
                                        onChange={() => { handleCheck(2, '3') }} />
                                    </td>
                                    <td>3. Prace przy czynnych sieciach gazowych i instalacjach gazu ziemnego
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[3]}
                                        onChange={() => { handleCheck(3, '4') }} />
                                    </td>
                                    <td>4. Odpowietrzanie, opróżnianie i napełnianie sieci gazowych i instalacji gazowych, w tym metodą próżniową
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[4]}
                                        onChange={() => { handleCheck(4, '5') }} />
                                    </td>
                                    <td>5. Badanie i czyszczenie tłokiem czynnych gazociągów
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[5]}
                                        onChange={() => { handleCheck(5, '6') }} />
                                    </td>
                                    <td>6. Prace związane z dehydratyzacją
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type="checkbox" className="checkbox" checked={isChecked[6]}
                                        onChange={() => { handleCheck(6, '7') }} />
                                    </td>
                                    <td>7. Prace spawalnicze prowadzone w obiektach technologicznych sieci gazowych w strefach zagrożonych wybuchem.
                                    </td>
                                </tr>
                </tbody>
            </table>
        </div>
    )


}
    export default ModalWorkOtherD;