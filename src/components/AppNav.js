import './AppNav.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

    const AppNav = (props) => {

    const navigate = useNavigate();

    const logout = () => {

        axios
        .post("user/logout")
        .then(() => {
            props.setUser(null);
            localStorage.clear();
            navigate("/login");
        })
        .catch((error) => {
            localStorage.clear();
            console.error(error);
        });
    }

    if(props.expTokenTime) {
        logout();
        props.setExpTokenTime(false);
    }
  
    return (
        <nav className="mainNav">
            <ul>
                {props.user &&
                    <li>
                        {/* <Link to="/order">Polecenie</Link> */}
                        <Link to="/workRegister">Polecenie</Link>
                    </li>
                }
                {props.user &&
                    <li>
                        <Link to="/workOrderList">Lista poleceń</Link>
                    </li>
                }
                {!props.user &&
                    <li>
                        <Link to="/login">Logowanie</Link>
                    </li>
                }
                {props.user &&
                    <li>
                        <Link onClick={logout}>Wyloguj</Link>
                    </li>
                }
                {!props.user &&
                    <li>
                        <Link to="/signup">Zapisz użytkownika</Link>
                    </li>
                }
                {props.user &&
                    <li>
                        Użytkownik: {props.user.user}
                    </li>
                }
            </ul>
        </nav>
    );
}

export default AppNav;