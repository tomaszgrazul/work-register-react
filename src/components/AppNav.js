import './AppNav.css'
import { Link } from "react-router-dom";

const AppNav = ({handleAppNav, handleAppNavUsername}) => {

  
    return (
        <nav className="mainNav">
            <ul>
                {handleAppNav &&
                    <li>
                        <Link to="/">Start</Link>
                    </li>
                }
                {handleAppNav &&
                    <li>
                        <Link to="/workOrderList">Lista poleceń</Link>
                    </li>
                }
                {!handleAppNav &&
                    <li>
                        <Link to="/login">Logowanie</Link>
                    </li>
                }
                {handleAppNav &&
                    <li>
                        <Link to="/logout">Wyloguj</Link>
                    </li>
                }
                {!handleAppNav &&
                    <li>
                        <Link to="/signup">Zapisz użytkownika</Link>
                    </li>
                }
                {handleAppNav &&
                    <li>
                        Użytkownik: {handleAppNavUsername}
                    </li>
                }
            </ul>
        </nav>
    );
}

export default AppNav;