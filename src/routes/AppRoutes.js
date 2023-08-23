import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from "../WorkRegister";
import WorkOrderList from "../views/WorkOrderList";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Logout from "../views/Logout";

const AppRoutes = ({handleAppRoutes}) => {

    const [handleLoginMessage, setHandleLoginMessage] = useState(true);

    const handleLogin = (loginOk, username) => {
        // console.log('state', loginOk);
        // console.log('AppRoutesusername', username);
        handleAppRoutes(loginOk, username);
        setHandleLoginMessage(loginOk);
    }

    const handleLogout = (logoutOk) => {
        // console.log('statelogout', logoutOk);
        handleAppRoutes(logoutOk);
        setHandleLoginMessage(logoutOk);
    }

    return (
        <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/workOrderList" element={<WorkOrderList/>} />
            <Route path="/login" element={<Login handleLogin={handleLogin} handleLoginMessage={handleLoginMessage}/>} />
            <Route path="/logout" element={<Logout handleLogout={handleLogout}/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    );
}

export default AppRoutes;