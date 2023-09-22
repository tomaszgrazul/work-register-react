import './AppNav.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AppNav = ({handleAppNav, handleLogout, user}) => {

    const navigate = useNavigate();
// console.log('user', user)
    const logout = (e) => {
        e.preventDefault();

        axios
        .post("user/logout")
        .then(() => {
            localStorage.clear();
            navigate("/login");
            handleLogout(false);
        })
        .catch((error) => {
            localStorage.clear();
            console.error(error);
        });
    }
  
    return (
        <nav className="mainNav">
            <ul>
                {handleAppNav &&
                    <li>
                        <Link to="/order">Polecenie</Link>
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
                        <Link onClick={logout}>Wyloguj</Link>
                    </li>
                }
                {!handleAppNav &&
                    <li>
                        <Link to="/signup">Zapisz użytkownika</Link>
                    </li>
                }
                {handleAppNav &&
                    <li>
                        Użytkownik: {user.user}
                    </li>
                }
            </ul>
        </nav>
    );
}

export default AppNav;