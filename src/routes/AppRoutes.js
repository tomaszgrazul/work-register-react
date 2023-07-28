import { Route, Routes } from "react-router-dom";
import Home from "../WorkRegister";
import WorkOrderList from "../views/WorkOrderList";


const AppRoutes = () => {
    return (
        <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/workOrderList" element={<WorkOrderList/>} />
            {/* <Route path="/signup" element={<SignUp user={props.user}/>} /> */}
        </Routes>
    );
}

export default AppRoutes;