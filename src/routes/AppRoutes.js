import { Route, Routes } from "react-router-dom";
import Order from "../components/Order";
import WorkOrderList from "../views/WorkOrderList";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
// import WorkRegister from "../WorkRegister";
// import WorkRegisterTeam from "../views/workRegister/WorkRegisterTeam";

    const AppRoutes = (props) => {

    return (
        <Routes>   
            <Route path="/order" element={<Order />} />
            <Route path="/workOrderList" element={<WorkOrderList />} />
            <Route path="/login" element={<Login user={props.user} setUser={props.setUser}/>} />
            <Route path="/signup" element={<SignUp/>} />
            {/* <Route path="/workRegister" element={<WorkRegister />} />
            <Route path="/workRegisterTeam" element={<WorkRegisterTeam/>} /> */}
        </Routes>
    );
}

export default AppRoutes;