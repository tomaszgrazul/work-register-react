import './WorkRegisterNav.css'
import { Link } from "react-router-dom";

const WorkRegisterNav = (props) => {

  
    return (
        <nav className="workRegisterNav">
            <ul>

                    <li>
                        <Link onClick={e=>{
                                props.setWorkRegisterSwitch(true);
                                props.setWorkRegisterTeamSwitch(false);
                            }}>Informacje</Link>
                    </li>

                    <li>
                        <Link onClick={e=>{
                                props.setWorkRegisterTeamSwitch(true);
                                props.setWorkRegisterSwitch(false);
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