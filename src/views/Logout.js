import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Logout = ({handleLogout}) => {

    handleLogout(false);
        axios
        .post("http://127.0.0.1:8080/logout")
        .then(() => {
            localStorage.clear();
        })
        .catch((error) => {
            localStorage.clear();
            console.error(error);
        });
        

    return (
        <Navigate to="/login"/>
    )
}

export default Logout;