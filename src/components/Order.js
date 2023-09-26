import './Order.css';
import { useState } from 'react';
import WorkRegisterNav from '../components/WorkRegisterNav';
import WorkRegister from '../WorkRegister';
import WorkRegisterTeam from "../views/workRegister/WorkRegisterTeam";

const Order = () => {

    const [workRegisterSwitch, setWorkRegisterSwitch] = useState(false);
    const [workRegisterTeamSwitch, setWorkRegisterTeamSwitch] = useState(false);

    return (
        <div className="order">
            <h1>Prace szczególnie niebezpieczne</h1>
                <WorkRegisterNav setWorkRegisterSwitch={setWorkRegisterSwitch} setWorkRegisterTeamSwitch={setWorkRegisterTeamSwitch}/>
                {workRegisterSwitch && <WorkRegister/>}
                {workRegisterTeamSwitch && <WorkRegisterTeam/>} 
        </div>
    );
}

export default Order;