import { useState } from 'react';
import './WorkRegisterNav.css'
import { Link } from "react-router-dom";

const WorkRegisterNav = (props) => {

    const [switchColor, setSwitchColor] = useState('WorkRegister');
  
    return (
        <nav className="workRegisterNav">
            <ul>

                    <li>
                        <Link style={{color: switchColor === 'WorkRegister' ? 'blue' : ''}} onClick={()=>{
                                props.setDisplayComponentName('WorkRegister');
                                setSwitchColor('WorkRegister');
                            }}>Informacje</Link>
                    </li>

                    <li>
                        <Link style={{color: switchColor === 'WorkRegisterTeam' ? 'blue' : ''}} onClick={()=>{
                                props.setDisplayComponentName('WorkRegisterTeam');
                                setSwitchColor('WorkRegisterTeam');
                            }}>Zespół</Link>
                    </li>

                    {/* <li>
                        <Link to="/workRegisterG1">G1</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterG2">G2</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterG3">G3</Link>
                    </li> */}

            </ul>
        </nav>
    );
}

export default WorkRegisterNav;