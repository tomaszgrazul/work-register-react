import './Login.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = ({handleLogin, handleLoginMessage, user}) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [loginMessage, setLoginMessage] = useState('');

    //  useEffect(() => {
    //     console.log('message', loginMessage);
    // }, [loginMessage]);

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };
    console.log('user2', user);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("user/login", {
        username: formData.username,
        password: formData.password
        })
        .then((res) => {
            // console.log(res.data.message);
            // console.log('error', res.data.error);
            // console.log('token', res.data.jwt);
            setLoginMessage(res.data.message);            
            if(!res.data.error) {
                setLoginMessage('');
                localStorage.setItem('user', JSON.stringify(res.data)); 
                // console.log("localstorage", JSON.parse(localStorage.getItem('user')));  
                handleLogin(true, res.data.user);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    // console.log("handleLoginMessage", handleLoginMessage);

    return (
        <div className="login">
            {handleLoginMessage && <Navigate to="/workOrderList"/>}
            {/* {handleLoginMessage ? <Navigate to="/workOrderList"/> : <Navigate to="/login"/>} */}
            <form onSubmit={handleSubmit}> 
            {loginMessage && <h2>{loginMessage}</h2> }
                <input 
                type="text" 
                name="username" 
                value={formData.username} 
                placeholder="Nazwa użytkownika"
                onChange={handleInputChange}
                />
                <input 
                type="password" 
                name="password" 
                value={formData.password}
                placeholder="Hasło"
                onChange={handleInputChange}
                />
                <button className="btn">Zaloguj</button>
            </form>
        </div>
    );
}

export default Login;