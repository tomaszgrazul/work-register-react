import { Route, Routes } from "react-router-dom";
import Home from "../WorkRegister";
import WorkOrderList from "../views/WorkOrderList";
import Login from "../views/Login";
import SignUp from "../views/SignUp";


const AppRoutes = (props) => {
    return (
        <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/workOrderList" element={<WorkOrderList/>} />
            <Route path="/login" element={<Login user={props.user}/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    );
}

export default AppRoutes;