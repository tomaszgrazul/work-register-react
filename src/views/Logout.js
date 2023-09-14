import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Logout = ({handleLogout}) => {

    handleLogout(false);
        axios
        .post("user/logout")
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