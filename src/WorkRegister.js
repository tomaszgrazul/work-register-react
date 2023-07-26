import {useState, useEffect} from "react";
import './WorkRegister.css';
import axios from "axios";
import ModalCompanyName from "./components/ModalCompanyName";
import ModalNumberOfAgreement from "./components/ModalNumberOfAgreement";
import ModalOfficeName from "./components/ModalOfficeName";
import ModalPrincipal from "./components/ModalPrincipal";
import ModalCoordinating from "./components/ModalCoordinating";
import ModalCoordinator from "./components/ModalCoordinator";
import ModalAllower from "./components/ModalAllower";
import ModalManager from "./components/ModalManager";
import ModalSupervisor from "./components/ModalSupervisor";

const WorkRegister = () => {

    const [addWorkOrderResponse,setAddWorkOrderResponse] = useState(false);
    const [savePermission,setSavePermission] = useState(false);

    const [errors, setErrors] = useState({
        whoWork: '',
        companyName: '',
        numberOutCompany: '',
        numberOfAgreement: '',
        officeName: '',
        principalName: '',
        coordinatingName: '',
        coordinatorName: '',
        managerName: '',
        supervisorName: '',
        allowerName: '',
        startDate: '',
        stopDate: ''
    });

    const [openModal, setOpenModal] = useState({
        whoWork: false,
        companyName: false,
        numberOutCompany: false,
        numberOfAgreement: false,
        officeName: false,
        principalName: false,
        coordinatingName: false,
        coordinatorName: false,
        managerName: false,
        supervisorName: false,
        allowerName: false
    });

    const [readValue, setReadValue] = useState({
        whoWork: '',
        companyName: '',
        numberOutCompany: '',
        numberOfAgreement: '',
        officeName: '',
        principalName: '',
        coordinatingName: '',
        coordinatorName: '',
        managerName: '',
        supervisorName: '',
        allowerName: '',
        startDate: '',
        stopDate: ''
    });

     const handleValueChange = (e) => {
        const target = e.target;
        const name = e.target.name;

        setReadValue ({
            ...readValue,
            [name]: target.value,
        });

        setErrors( {    
            ...errors, 
            [name]: ""
        });
    };

    const handleAddModal = (addValue, name) => {
        setReadValue({
            ...readValue,
            [name]: addValue
        })
    }

 
    // useEffect(() => {

    //     console.log('aaaa', errors);
    //     // console.log('bbb', readValue);
    // }, [errors]);

    const addNmberOfAgreemnet = () => {
        let newNumberOfAgreement = {
            numberOfAgreement: readValue.numberOfAgreement
        }

        if (newNumberOfAgreement.numberOfAgreement === '') {    
            setErrors( {
                ...errors,
                numberOfAgreement: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        numberOfAgreement: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            numberOfAgreement: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNumberOfAgreemnet", newNumberOfAgreement)
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addCompany = () => {
        let newCompany = {
            companyName: readValue.companyName  
        }

        if (newCompany.companyName === '') {    
            setErrors( {
                ...errors,
                companyName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        companyName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            companyName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewCompany", newCompany)
        .then(() => {
            
         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addOffice = () => {
        let newOffice = {
            officeName: readValue.officeName
        }

        if (newOffice.officeName === '') {    
            setErrors( {
                ...errors,
                officeName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        officeName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            officeName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewOfficeName", newOffice)
        .then(() => {
            
         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addPrincipal = () => {
        let newPrincipal = {
            principalName: readValue.principalName,
            principalCompany: readValue.companyName
        }

        if (newPrincipal.principalName === '') {    
            setErrors( {
                ...errors,
                principalName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        principalName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            principalName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewPrincipal", newPrincipal)
        .then(() => {
            
         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addCoordinating = () => {
        let newCoordinating  = {
            coordinatingName: readValue.coordinatingName,
            coordinatingCompany: readValue.companyName
        }

        if (newCoordinating.coordinatingName === '') {    
            setErrors( {
                ...errors,
                coordinatingName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        coordinatingName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            coordinatingName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewCoordinating ", newCoordinating )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addCoordinator = () => {
        let newCoordinator  = {
            coordinatorName: readValue.coordinatorName,
            coordinatorCompany: readValue.companyName
        }

        if (newCoordinator .coordinatorName === '') {    
            setErrors( {
                ...errors,
                coordinatorName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        coordinatorName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            coordinatorName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewCoordinator ", newCoordinator )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

     const addAllower = () => {
        let newAllower  = {
            allowerName: readValue.allowerName,
            allowerCompany: readValue.companyName
        }

        if (newAllower.allowerName === '') {    
            setErrors( {
                ...errors,
                allowerName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        allowerName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            allowerName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewAllower ", newAllower )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addManager = () => {
        let newManager  = {
            managerName: readValue.managerName,
            managerCompany: readValue.companyName
        }

        if (newManager.managerName === '') {    
            setErrors( {
                ...errors,
                managerName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        managerName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            managerName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewManager ", newManager )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addSupervisor = () => {
        let newSupervisor  = {
            supervisorName: readValue.supervisorName,
            supervisorCompany: readValue.companyName
        }

        if (newSupervisor.supervisorName === '') {    
            setErrors( {
                ...errors,
                supervisorName: "Brak danych !!!"
            });
            return;
        } else {
                    setErrors( {
                        ...errors,
                        supervisorName: ""
                    });
                }

        setReadValue( {    
            ...readValue, 
            supervisorName: ''
        });

        axios
        .post("http://127.0.0.1:8080/addNewSupervisor ", newSupervisor )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };


    const handleSubmitForm = (e) => {

        e.preventDefault();
        let workOrder = {
            whoWork: readValue.whoWork,  
            numberOfAgreement: readValue.numberOfAgreement,
            numberOutCompany: readValue.numberOutCompany,   
            companyName: readValue.companyName,
            officeName: readValue.officeName,
            principalName: readValue.principalName,
            coordinatingName: readValue.coordinatingName,
            coordinatorName: readValue.coordinatorName,
            managerName: readValue.managerName,
            supervisorName: readValue.supervisorName,
            allowerName: readValue.allowerName,
            startDate: readValue.startDate,
            stopDate: readValue.stopDate
        }
        
        Object.entries(workOrder).map(item => {
            if (item[1] === '') {       
                return (
                    setErrors( prevErrors => { 
                        return {   
                        ...prevErrors, 
                        [item[0]]: "Brak danych !!!"
                    }})
                )    
            }
        });

        if(savePermission) {
            axios
            .post("http://127.0.0.1:8080/addWorkOrder ", workOrder )
            .then((res) => {
                setAddWorkOrderResponse(res.data.save);
            })
            .catch((error) => {
                console.error(error);
            });
        }     
    }

    useEffect(() => {
        const found = Object.values(readValue).find(item => item === '');
            if( found === '') {
            setSavePermission(false);
        }  else {
            setSavePermission(true);
        }
    },[readValue]);

    return (
        <div className="register-main">
            <header>
                <h1>Prace szczególnie niebezpieczne</h1>
            </header>
            <form>
                <div>
                    <div className="label">
                        <label htmlFor="praceRealizuje">Prace realizuje</label>
                    </div> 
                    <input onChange={handleValueChange} value={readValue.whoWork} type="text" placeholder={errors.whoWork ? errors.whoWork : ''} name="whoWork" />
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPorozumienia">Nr porozumienia</label>
                    </div> 
                    <input onChange={handleValueChange} value={readValue.numberOfAgreement} type="text" placeholder={errors.numberOfAgreement ? errors.numberOfAgreement : ''} name="numberOfAgreement" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addNmberOfAgreemnet();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {numberOfAgreement: true}});
                    }}>Wybierz</button>
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPolFirmyZewnetrznej">Nr polecenia firmy zew.</label>
                    </div> 
                    <input onChange={handleValueChange} value={readValue.numberOutCompany} type="text" placeholder={errors.numberOutCompany ? errors.numberOutCompany : ''} name="numberOutCompany" />
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="companyName">Nazwa firmy</label>
                    </div> 
                    <input onChange={handleValueChange} value={readValue.companyName} type="text" placeholder={errors.companyName ? errors.companyName : ''} name="companyName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCompany();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {companyName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nazwaBiura">Nazwa biura</label>
                    </div>  
                    <input onChange={handleValueChange} value={readValue.officeName} type="text" placeholder={errors.officeName ? errors.officeName : ''} name="officeName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addOffice();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {officeName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="poleceniodawca">Poleceniodawca</label>
                    </div>   
                    <input onChange={handleValueChange} value={readValue.principalName} type="text" placeholder={errors.principalName ? errors.principalName : ''} name="principalName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addPrincipal();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {principalName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynujący">Koordynujący</label>
                    </div>    
                    <input onChange={handleValueChange} value={readValue.coordinatingName} type="text" placeholder={errors.coordinatingName ? errors.coordinatingName : ''} name="coordinatingName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCoordinating();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {coordinatingName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynator">Koordynator</label>
                    </div>  
                    <input onChange={handleValueChange} value={readValue.coordinatorName} type="text" placeholder={errors.coordinatorName ? errors.coordinatorName : ''} name="coordinatorName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCoordinator();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {coordinatorName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="dopuszczający">Dopuszczający</label>
                    </div>   
                    <input onChange={handleValueChange} value={readValue.allowerName} type="text" placeholder={errors.allowerName ? errors.allowerName : ''} name="allowerName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addAllower();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {allowerName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="kierującyZespołem">Kierujący zespołem</label>
                    </div> 
                    <input onChange={handleValueChange} value={readValue.managerName} type="text" placeholder={errors.managerName ? errors.managerName : ''} name="managerName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addManager();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {managerName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nadzorEksploatacyjny">Nadzór eksploatacyjny</label>
                    </div>     
                    <input onChange={handleValueChange} value={readValue.supervisorName} type="text" placeholder={errors.supervisorName ? errors.supervisorName : ''} name="supervisorName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addSupervisor();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {supervisorName: true}});
                    }}>Wybierz</button>
                </div>

                <div>
                    <label htmlFor="rozpoczeciePracy">Rozpoczęcie pracy (data, godzina)</label>
                    <input onChange={handleValueChange} value={readValue.startDate} type="datetime-local" name="startDate" />
                    {errors.startDate && <p id="error">{errors.startDate}</p>}
                </div>

                <div>
                    <label htmlFor="zakonczeniePracy">Zakończenie pracy (data, godzina)</label>
                    <input onChange={handleValueChange} value={readValue.stopDate} type="datetime-local" name="stopDate" />
                    {errors.stopDate && <p id="error">{errors.stopDate}</p>}
                </div>
                <div>
                    <button onClick={handleSubmitForm} type="submit">Zapisz</button>
                    {addWorkOrderResponse && <p>Zapisane</p>}
                </div>
            </form>
            {openModal.companyName && <ModalCompanyName setOpenModal={setOpenModal} handleAddModal={handleAddModal}/>}

            {openModal.numberOfAgreement && <ModalNumberOfAgreement setOpenModal={setOpenModal} handleAddModal={handleAddModal}/>}

            {openModal.officeName && <ModalOfficeName setOpenModal={setOpenModal} handleAddModal={handleAddModal}/>}

            {openModal.principalName && <ModalPrincipal setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}

            {openModal.coordinatingName && <ModalCoordinating setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}

            {openModal.coordinatorName && <ModalCoordinator setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}

            {openModal.managerName && <ModalManager setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}

            {openModal.supervisorName && <ModalSupervisor setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}

            {openModal.allowerName && <ModalAllower setOpenModal={setOpenModal} handleAddModal={handleAddModal} companyName={readValue.companyName}/>}
        </div>

    )
}

export default WorkRegister;