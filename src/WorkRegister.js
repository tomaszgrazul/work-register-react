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
        allowerName: ''
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
        allowerName: ''
    });


    const handleWhoWork = (e) => {
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                whoWork: e.target.value
            }
        });
    }

    const handleNumberOfAgreemnetList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                numberOfAgreement: e.target.value
            }
        });
    }
    const handleAddNumberOfAgreement = (addNumber) => {        
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                numberOfAgreement: addNumber
            }
        });   
    }

    const handleCompanyList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                companyName: e.target.value
            }
        });
    }
    const handleAddCompanyName = (addCompanyName) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                companyName: addCompanyName
            }
        });    
    }

    const handleNumberOutCompany = (e) => {
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                numberOutCompany: e.target.value
            }
        }); 
    }

    const handleOfficeList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                officeName: e.target.value
            }
        }); 
    }
    const handleAddOfficeName = (addOfficeName) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                officeName: addOfficeName
            }
        });   
    }

    const handlePrincipalList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                principalName: e.target.value
            }
        });
    }
    const handleAddPrincipal = (addPrincipal) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                principalName: addPrincipal
            }
        });      
    }

    const handleCoordinatingList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                coordinatingName: e.target.value
            }
        });
    }
    const handleAddCoordinating = (addCoordinating) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                coordinatingName: addCoordinating
            }
        });    
    }

    const handleCoordinatorList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                coordinatorName: e.target.value
            }
        }); 
    }
    const handleAddCoordinator = (addCoordinator) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                coordinatorName: addCoordinator
            }
        });    
    }

    const handleManagerList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                managerName: e.target.value
            }
        }); 
    }
    const handleAddManager = (addManager) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                managerName: addManager
            }
        });   
    }

    const handleSupervisorList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                supervisorName: e.target.value
            }
        }); 
    }
    const handleAddSupervisor = (addSupervisor) => {            
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                supervisorName: addSupervisor
            }
        });    
    }

    const handleAllowerList = (e) => {       
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                allowerName: e.target.value
            }
        });
    }
    const handleAddAllower = (addAllower) => {             
        setReadValue((prevReadValue) => {
            return {
                ...prevReadValue, 
                allowerName: addAllower
            }
        });   
    }
    
  
    // useEffect(() => {

    //     console.log('aaaa', readValue) 
    // }, [readValue]);

    const addNmberOfAgreemnet = () => {
        let newNumberOfAgreement = {
            numberOfAgreement: readValue.numberOfAgreement
        }

        if (newNumberOfAgreement.numberOfAgreement === '') {    
            setErrors(() => {
                return {
                    numberOfAgreement: "Wpisz numer porozumienia !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                numberOfAgreement: ''
            };
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
            setErrors(() => {
                return {
                    companyName: "Wpisz nazwę firmy !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                companyName: ''
            };
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
            setErrors(() => {
                return {
                    officeName: "Wpisz nazwę biura !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                officeName: ''
            };
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
            setErrors(() => {
                return {
                    principalName: "Wpisz poleceniodawcę !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                principalName: ''
            };
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

        if (newCoordinating .coordinatingName === '') {    
            setErrors(() => {
                return {
                    coordinatingName: "Wpisz koordynującego !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                coordinatingName: ''
            };
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
            setErrors(() => {
                return {
                    coordinatorName: "Wpisz koordynatora !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                coordinatorName: ''
            };
        });

        axios
        .post("http://127.0.0.1:8080/addNewCoordinator ", newCoordinator )
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
            setErrors(() => {
                return {
                    managerName: "Wpisz kierującego zespołem !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                managerName: ''
            };
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
            setErrors(() => {
                return {
                    supervisorName: "Wpisz nadzorującego !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                supervisorName: ''
            };
        });

        axios
        .post("http://127.0.0.1:8080/addNewSupervisor ", newSupervisor )
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
            setErrors(() => {
                return {
                    allowerName: "Wpisz dopuszczającego !!!"
                };
            });
            return;
        } else setErrors('');

        setReadValue(prevReadValue => {
            return { 
                ...prevReadValue, 
                allowerName: ''
            };
        });

        axios
        .post("http://127.0.0.1:8080/addNewAllower ", newAllower )
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
            companyName: readValue.companyName,
            numberOutCompany: readValue.numberOutCompany,
            numberOfAgreement: readValue.numberOfAgreement,
            officeName: readValue.officeName,
            principalName: readValue.principalName,
            coordinatingName: readValue.coordinatingName,
            coordinatorName: readValue.coordinatorName,
            managerName: readValue.managerName,
            supervisorName: readValue.supervisorName,
            allowerName: readValue.allowerName
        }
        
        if (workOrder.whoWork === '') {    
            setErrors(() => {
                return {
                    whoWork: "Wpisz kto realizuje prace !!!"
                };
            });
            return;
        } else setErrors('');

        if (workOrder.numberOutCompany === '') {  
            setErrors (() => {
                return {
                    numberOutCompany: "Wpisz numer polecenia !!!"
                };
            });
            return;
        } else setErrors('');

        axios
        .post("http://127.0.0.1:8080/addWorkOrder ", workOrder )
        .then((res) => {
            setAddWorkOrderResponse(res.data.save);
         })
        .catch((error) => {
            console.error(error);
        });
    }


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
                    <input onChange={handleWhoWork} value={readValue.whoWork} type="text" placeholder="" name="praceRealizuje" />
                    {errors.whoWork && <p className="error">{errors.whoWork}</p>}
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPorozumienia">Nr porozumienia</label>
                    </div> 
                    <input onChange={handleNumberOfAgreemnetList} value={readValue.numberOfAgreement} type="text" placeholder="" name="nrPorozumienia" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addNmberOfAgreemnet();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {numberOfAgreement: true}});
                    }}>Wybierz</button>
                    {errors.numberOfAgreement && <p className="error">{errors.numberOfAgreement}</p>}
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPolFirmyZewnetrznej">Nr polecenia firmy zew.</label>
                    </div> 
                    <input onChange={handleNumberOutCompany} value={readValue.numberOutCompany} type="text" placeholder="" name="nrPolFirmyZewnetrznej" />
                    {errors.numberOutCompany && <p className="error">{errors.numberOutCompany}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="companyName">Nazwa firmy</label>
                    </div> 
                    <input onChange={handleCompanyList} value={readValue.companyName} type="text" placeholder="" name="companyName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCompany();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {companyName: true}});
                    }}>Wybierz</button>
                    {errors.companyName && <p className="error">{errors.companyName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nazwaBiura">Nazwa biura</label>
                    </div>  
                    <input onChange={handleOfficeList} value={readValue.officeName} type="text" placeholder="" name="nazwaBiura" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addOffice();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {officeName: true}});
                    }}>Wybierz</button>
                    {errors.officeName && <p className="error">{errors.officeName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="poleceniodawca">Poleceniodawca</label>
                    </div>   
                    <input onChange={handlePrincipalList} value={readValue.principalName} type="text" placeholder="" name="poleceniodawca" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addPrincipal();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {principalName: true}});
                    }}>Wybierz</button>
                    {errors.principalName && <p className="error">{errors.principalName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynujący">Koordynujący</label>
                    </div>    
                    <input onChange={handleCoordinatingList} value={readValue.coordinatingName} type="text" placeholder="" name="koordynujący" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCoordinating();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {coordinatingName: true}});
                    }}>Wybierz</button>
                    {errors.coordinatingName && <p className="error">{errors.coordinatingName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynator">Koordynator</label>
                    </div>  
                    <input onChange={handleCoordinatorList} value={readValue.coordinatorName} type="text" placeholder="" name="koordynator" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCoordinator();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {coordinatorName: true}});
                    }}>Wybierz</button>
                    {errors.coordinatorName && <p className="error">{errors.coordinatorName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="dopuszczający">Dopuszczający</label>
                    </div>   
                    <input onChange={handleAllowerList} value={readValue.allowerName} type="text" placeholder="" name="dopuszczający" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addAllower();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {allowerName: true}});
                    }}>Wybierz</button>
                    {errors.allowerName && <p className="error">{errors.allowerName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="kierującyZespołem">Kierujący zespołem</label>
                    </div> 
                    <input onChange={handleManagerList} value={readValue.managerName} type="text" placeholder="" name="kierującyZespołem" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addManager();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {managerName: true}});
                    }}>Wybierz</button>
                    {errors.managerName && <p className="error">{errors.managerName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nadzorEksploatacyjny">Nadzór eksploatacyjny</label>
                    </div>     
                    <input onChange={handleSupervisorList} value={readValue.supervisorName} type="text" placeholder="" name="nadzorEksploatacyjny" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addSupervisor();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(() => {return {supervisorName: true}});
                    }}>Wybierz</button>
                    {errors.supervisorName && <p className="error">{errors.supervisorName}</p>}
                </div>

                <div>
                    <label htmlFor="rozpoczeciePracy">Rozpoczęcie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="rozpoczeciePracy" />
                </div>

                <div>
                    <label htmlFor="zakonczeniePracy">Zakończenie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="zakonczeniePracy" />
                </div>
                <div>
                    <button onClick={handleSubmitForm} type="submit">Zapisz</button>
                    {addWorkOrderResponse && <p>Zapisane</p>}
                </div>
            </form>
            {openModal.companyName && <ModalCompanyName setOpenModal={setOpenModal} handleAddCompanyName={handleAddCompanyName}/>}

            {openModal.numberOfAgreement && <ModalNumberOfAgreement setOpenModal={setOpenModal} handleAddNumberOfAgreement={handleAddNumberOfAgreement}/>}

            {openModal.officeName && <ModalOfficeName setOpenModal={setOpenModal} handleAddOfficeName={handleAddOfficeName}/>}

            {openModal.principalName && <ModalPrincipal setOpenModal={setOpenModal} handleAddPrincipal={handleAddPrincipal} companyName={readValue.companyName}/>}

            {openModal.coordinatingName && <ModalCoordinating setOpenModal={setOpenModal} handleAddCoordinating={handleAddCoordinating} companyName={readValue.companyName}/>}

            {openModal.coordinatorName && <ModalCoordinator setOpenModal={setOpenModal} handleAddCoordinator={handleAddCoordinator} companyName={readValue.companyName}/>}

            {openModal.managerName && <ModalManager setOpenModal={setOpenModal} handleAddManager={handleAddManager} companyName={readValue.companyName}/>}

            {openModal.supervisorName && <ModalSupervisor setOpenModal={setOpenModal} handleAddSupervisor={handleAddSupervisor} companyName={readValue.companyName}/>}

            {openModal.allowerName && <ModalAllower setOpenModal={setOpenModal} handleAddAllower={handleAddAllower} companyName={readValue.companyName}/>}
        </div>

    )
}

export default WorkRegister;