import './Login.css'
import { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

    const Login = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [loginMessage, setLoginMessage] = useState('');
 
    const handleInputChange = (e) => {

        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("user/login", {
        username: formData.username,
        password: formData.password
        })
        .then((res) => {
            setLoginMessage(res.data.message);  
            console.log('użytkownik', res.data.user);          
            if(!res.data.error) {
                setLoginMessage('');
                props.setUser(res.data);
                localStorage.setItem('user', JSON.stringify(res.data)); 
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="login">
            {props.user && <Navigate to="/workOrderList"/>}
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