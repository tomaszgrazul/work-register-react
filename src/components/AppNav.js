import './AppNav.css'

import { Link } from "react-router-dom";

const AppNav = () => {




    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/workOrderList" >Lista poleceń</Link>
                </li>
                <li>
                    <Link to="/login" >Logowanie</Link>
                </li>
                <li>
                    <Link to="/signup">Zapisz użytkownika</Link>
                </li>
            </ul>
        </nav>
    );
}

export default AppNav;