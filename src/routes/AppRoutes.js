import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Order from "../components/Order";
import WorkOrderList from "../views/WorkOrderList";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Logout from "../views/Logout";
import WorkRegister from "../WorkRegister";
import WorkRegisterTeam from "../views/workRegister/WorkRegisterTeam";

const AppRoutes = ({handleAppRoutes, handleAppRoutesClic, user}) => {

    const [handleLoginMessage, setHandleLoginMessage] = useState(false);

    const handleLogin = (loginOk, username) => {
        // console.log('state', loginOk);
        // console.log('AppRoutesusername', username);
        handleAppRoutes(loginOk, username);
        setHandleLoginMessage(loginOk);
    }
    console.log('user1', user);
    // const handleLogout = (logoutOk) => {
    //     // console.log('statelogout', logoutOk);
    //     handleAppRoutes(logoutOk);
    //     setHandleLoginMessage(logoutOk);
    // }

    const handleWorkOrderList = (clickTrue) => {
        // console.log('clickTrue', clickTrue);
        handleAppRoutesClic(clickTrue);
    }

    const handleWorkRegister = (clickFalse) => {
        // console.log('clickTrue', clickTrue);
        handleAppRoutesClic(clickFalse);
    }

    return (
        <Routes>   
            <Route path="/order" element={<Order />} />
            <Route path="/workOrderList" element={<WorkOrderList handleWorkOrderList={handleWorkOrderList}/>} />
            <Route path="/login" element={<Login user={user} handleLogin={handleLogin} handleLoginMessage={handleLoginMessage}/>} />
            {/* <Route path="/logout" element={<Logout handleLogout={handleLogout}/>} /> */}
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/workRegister" element={<WorkRegister handleWorkRegister={handleWorkRegister}/>} />
            <Route path="/workRegisterTeam" element={<WorkRegisterTeam/>} />
        </Routes>
    );
}

export default AppRoutes;