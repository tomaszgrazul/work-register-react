import axios from "axios";
import { useState, useEffect } from "react";

const LoadReadValue = (props) => {

    const [register, setRegister] = useState([]);
    const [readValue, setReadValue] = useState({
        companyName: '',
        officeName: '',
        principalName: '',
        coordinatingName: '',
        coordinatorName: '',
        managerName: '',
        supervisorName: '',
        allowerName: '',
        startDate: '',
        stopDate: '',
        numberRegistration: '',
        createdBy: '',
        editBy: ''
    });

    useEffect(() => {
        readWorkOrderList();  
    }, []);

    const readWorkOrderList = () => {
        axios
        .get("workOrder/readWorkOrder") 
        .then((res) => { 
            setRegister(res.data); 
            // setError(false);     
        })
        .catch((error) => {
            console.error(error);
            // setError(true);
        });   
    }

    setReadValue({
        companyName: register[props.i].companyName,
        officeName: register[props.i].officeName,
        principalName: register[props.i].principalName,
        coordinatingName: register[props.i].coordinatingName,
        coordinatorName: register[props.i].coordinatorName,
        managerName: register[props.i].managerName,
        supervisorName: register[props.i].supervisorName,
        allowerName: register[props.i].allowerName,
        startDate: register[props.i].startDate,
        stopDate: register[props.i].stopDate,
        numberRegistration: register[props.i].numberRegistration,
        createdBy: register[props.i].createdBy,
        editBy: register[props.i].editBy
    });  
}

export default LoadReadValue;