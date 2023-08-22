import './Login.css'
import { useState } from "react";
import axios from 'axios';

const Login = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [loginMessage, setLoginMessage] = useState('');
    const [loginOk, setLoginOk] = useState(false);

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };
    // console.log(formData);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("http://127.0.0.1:8080/login", {
        username: formData.username,
        password: formData.password
        })
        .then((res) => {
            console.log(res.data.message);
            console.log('error', res.data.error);
            setLoginMessage(res.data.message);            
            if(!res.data.error) {
                setLoginMessage('');
                localStorage.setItem('user', JSON.stringify(res.data));
                props.setLoginOk(true);
            }
            // if (Array.isArray(res.data.username)) {
            //     setLoginMessage(res.data.username[0])
            // } else 
            // if (Array.isArray(res.data.password)) {
            //     setLoginMessage(res.data.password[0])
            // } else {
            // if (res.data.error) {
            //     setLoginMessage('Niepoprawna nazwa użytkownika lub hasło');
            // } else {
                // setLoginMessage('');
                // // props.setUser(res.data);
                // localStorage.setItem('user', JSON.stringify(res.data));
            // } 
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <div className="login">
            {/* {props.user && <Navigate to="/" />} */}
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