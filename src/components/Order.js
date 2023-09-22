import './Order.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import WorkRegisterNav from '../components/WorkRegisterNav';

const Order = () => {



    return (
        <div className="order">
            <h1>Prace szczególnie niebezpieczne</h1>
                <WorkRegisterNav/>
        </div>
    );
}

export default Order;