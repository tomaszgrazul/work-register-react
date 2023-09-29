import axios from "axios";
import { useState, useEffect } from "react";
import './signUp.css'

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [signUpDone, setSignUpDone] = useState(false);

    
    const validate = () => {
        let validationErrors = {
            username: false,
            email: false,
            password: false,
            confirmPassword: false
        };

        
        if (formData.username.trim().length < 4) {
            validationErrors.username = true;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    username: 'Nazwa użytkownika powinna składać się z min. 4 znaków'
                };
            });
        } else if (!/^[^\s]*$/.test(formData.username.trim())) {
            validationErrors.username = true;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    username: "Nazwa użytkownika nie może zawierać spacji"
                };
            });
        } else {
            validationErrors.username = false;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    username: ""
                };
            });
        }   


        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
            validationErrors.email = true;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    email: "Niepoprawny email"
                };
            });
        } else {
            validationErrors.email = false;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    email: ""
                };
            });
        }


        if (formData.password.trim().length < 6) {
            validationErrors.password = true;
            setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    password: 'Hasło musi składać sie z min. 6 znaków'
                };
            });
        } else if (!/^[^\s]*$/.test(formData.password.trim())) {
                    validationErrors.password = true;
                    setErrors(prevErrors =>{
                    return {
                        ...prevErrors, 
                        password: "Hasło nie może zawierać spacji"
                    };
                });  
        } else if(!/[!@#$%^&*()_+\-=[\]{};':",.<>/?]+/.test(formData.password.trim())) {
                validationErrors.password = true;
                setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    password: "Hasło musi zawierać jeden ze znaków specjalnych"
                }; 
            });
        } else {
                validationErrors.password = false;
                setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    password: ""
                };
            }); 
        }


        if (formData.password.trim() !== formData.confirmPassword.trim()) {
                validationErrors.confirmPassword = true;
                setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    confirmPassword: "Hasła muszą być takie same"
                };
            });
        } else {
            validationErrors.confirmPassword = false;
                setErrors(prevErrors =>{
                return {
                    ...prevErrors, 
                    confirmPassword: ""
                };
            });
        }

        return (
                !validationErrors.username && 
                !validationErrors.email && 
                !validationErrors.password && 
                !validationErrors.confirmPassword
            );
    };


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
        
        if (!validate()) {
             return;
        }
    
        axios
        .post("user/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password
        })
        .then((res) => {  
            if(res.data.error) {
                    setErrors(prevErrors =>{
                     return {
                        ...prevErrors, 
                        username: res.data.message
                    };
                });
            } else {
                setSignUpDone(res.data.save);
            }  
         })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
            <div className="signUp">
                {/* {props.user && <Navigate to="/" />} */}
                <form onSubmit={handleSubmit} >  

                    <input type="text" name="username" placeholder="Nazwa użytkownika"  onChange={handleInputChange}/>
                    {errors.username && <p id="error">{errors.username}</p>}

                    <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                    {errors.email && <p id="error">{errors.email}</p>}

                    <input type="password" name="password" placeholder="Hasło" onChange={handleInputChange} />
                    {errors.password && <p id="error">{errors.password}</p>}

                    <input type="password" name="confirmPassword" placeholder="Potwierdź hasło" onChange={handleInputChange} />
                    {errors.confirmPassword && <p id="error">{errors.confirmPassword}</p>}

                    <button className="btn noHover" disabled={signUpDone}>Zapisz</button>

                    {/* {signUpDone && <div className="btn"><Link to='/login'>Logowanie</Link></div>} */}
                    {signUpDone && <p id="save" >Użytkownik zapisany</p>}
                </form>
            </div>
            )
}

export default SignUp;