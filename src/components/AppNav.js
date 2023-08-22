import './AppNav.css'

import { Link } from "react-router-dom";

const AppNav = (props) => {


console.log('loginOK=' , props.user)

    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                {props.user &&
                    <li>
                        <Link to="/workOrderList" >Lista poleceń</Link>
                    </li>
                }
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