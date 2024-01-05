import { Route, Routes } from "react-router-dom";
import WorkRegister from "../WorkRegister"
import WorkOrderList from "../views/WorkOrderList";
import Login from "../views/Login";
import View from "../views/View";
import SignUp from "../views/SignUp";

    const AppRoutes = (props) => {


    return (
        <Routes>   
            <Route path="/workRegister" element={<WorkRegister user={props.user}/>} />
            <Route path="/workOrderList" element={<WorkOrderList user={props.user}/>} />
            <Route path="/login" element={<Login user={props.user} setUser={props.setUser}/>} />
            <Route path="/view" element={<View/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    );
}

export default AppRoutes;