import './Order.css';
import { useState } from 'react';
import WorkRegisterNav from '../components/WorkRegisterNav';
import WorkRegister from '../WorkRegister';
import WorkRegisterTeam from "../views/workRegister/WorkRegisterTeam";

const Order = () => {

    const [displayComponentName, setDisplayComponentName] = useState('WorkRegister');

    return (
        <div className="order">
            <h1>Prace szczególnie niebezpieczne</h1>
                <WorkRegisterNav setDisplayComponentName={setDisplayComponentName}/>
                {displayComponentName === 'WorkRegister' && <WorkRegister/>}
                {displayComponentName === 'WorkRegisterTeam' && <WorkRegisterTeam/>} 
        </div>
    );
}

export default Order;