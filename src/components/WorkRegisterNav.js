import './WorkRegisterNav.css'
import { Link } from "react-router-dom";

const WorkRegisterNav = () => {

  
    return (
        <nav className="workRegisterNav">
            <ul>

                    <li>
                        <Link to="/workRegister">Informacje</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterTeam">Zespół</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterG1">G1</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterG2">G2</Link>
                    </li>

                    <li>
                        <Link to="/workRegisterG3">G3</Link>
                    </li>

            </ul>
        </nav>
    );
}

export default WorkRegisterNav;