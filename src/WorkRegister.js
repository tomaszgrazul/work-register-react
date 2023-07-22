import {useState} from "react";
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

    const [whoWork, setWhoWork] = useState('');
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

    const [openModalCompanyName, setOpenModalCompanyName] = useState(false);
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
    const [companyName, setCompanyName] = useState('');

    const [numberOutCompany, setNumberOutCompany] = useState('');
 
    const [openModalNumberOfAgreement, setOpenModalNumberOfAgreement] = useState(false);
    const [number, setNumber] = useState('');
   
    const [openModalOfficeName, setOpenModalOfficeName] = useState(false);
    const [officeName, setOfficeName] = useState('');
 
    const [openModalPrincipal, setOpenModalPrincipal] = useState(false);
    const [principal, setPrincipal] = useState('');
 
    const [openModalCoordinating, setOpenModalCoordinating] = useState(false);
    const [coordinating, setCoordinating] = useState('');
 
    const [openModalCoordinator, setOpenModalCoordinator] = useState(false);
    const [coordinator, setCoordinator] = useState('');
 
    const [manager, setManager] = useState('');
  
    const [supervisor, setSupervisor] = useState('');
  
    const [allower, setAllower] = useState('');
      

    const handleWhoWork = (e) => {
        setWhoWork(e.target.value);
    }

    const handleCompanyList = (e) => {       
        setCompanyName(e.target.value);
    }
    const handleAddCompanyName = (addCompanyName) => {            
        setCompanyName(addCompanyName);    
    }

    const handleNumberOutCompany = (e) => {
        setNumberOutCompany(e.target.value);
    }

    const handleNumberOfAgreemnetList = (e) => {       
        setNumber(e.target.value);
    }
    const handleAddNumberOfAgreement = (addNumber) => {        
        setNumber(addNumber);    
    }

    const handleOfficeList = (e) => {       
        setOfficeName(e.target.value);
    }
    const handleAddOfficeName = (addOfficeName) => {            
        setOfficeName(addOfficeName);    
    }

    const handlePrincipalList = (e) => {       
        setPrincipal(e.target.value);
    }
    const handleAddPrincipal = (addPrincipal) => {            
        setPrincipal(addPrincipal);    
    }

    const handleCoordinatingList = (e) => {       
        setCoordinating(e.target.value);
    }
    const handleAddCoordinating = (addCoordinating) => {            
        setCoordinating(addCoordinating);    
    }

    const handleCoordinatorList = (e) => {       
        setCoordinator(e.target.value);
    }
    const handleAddCoordinator = (addCoordinator) => {            
        setCoordinator(addCoordinator);    
    }

    const handleManagerList = (e) => {       
        setManager(e.target.value);
    }
    const handleAddManager = (addManager) => {            
        setManager(addManager);    
    }

    const handleSupervisorList = (e) => {       
        setSupervisor(e.target.value);
    }
    const handleAddSupervisor = (addSupervisor) => {            
        setSupervisor(addSupervisor);    
    }

    const handleAllowerList = (e) => {       
        setAllower(e.target.value);
    }
    const handleAddAllower = (addAllower) => {            
        setAllower(addAllower);    
    }
    
  
    const addCompany = () => {
        let newCompany = {
            companyName: companyName
        }

        if (newCompany.companyName === '') {    
            setErrors(() => {
                return {
                    companyName: "Wpisz nazwę firmy !!!"
                };
            });
            return;
        } else setErrors('');

        setCompanyName('');

        axios
        .post("http://127.0.0.1:8080/addNewCompany", newCompany)
        .then(() => {
            
         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addNmberOfAgreemnet = () => {
        let newNumberOfAgreement = {
            numberOfAgreement: number
        }

        if (newNumberOfAgreement.numberOfAgreement === '') {    
            setErrors(() => {
                return {
                    numberOfAgreement: "Wpisz numer porozumienia !!!"
                };
            });
            return;
        } else setErrors('');

        setNumber('');

        axios
        .post("http://127.0.0.1:8080/addNumberOfAgreemnet", newNumberOfAgreement)
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addOffice = () => {
        let newOffice = {
            officeName: officeName
        }

        if (newOffice.officeName === '') {    
            setErrors(() => {
                return {
                    officeName: "Wpisz nazwę biura !!!"
                };
            });
            return;
        } else setErrors('');

        setOfficeName('');

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
            principalName: principal,
            principalCompany: companyName
        }

        if (newPrincipal.principalName === '') {    
            setErrors(() => {
                return {
                    principalName: "Wpisz poleceniodawcę !!!"
                };
            });
            return;
        } else setErrors('');

        setPrincipal('');

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
            coordinatingName: coordinating,
            coordinatingCompany: companyName
        }

        if (newCoordinating .coordinatingName === '') {    
            setErrors(() => {
                return {
                    coordinatingName: "Wpisz koordynującego !!!"
                };
            });
            return;
        } else setErrors('');

        setCoordinating ('');

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
            coordinatorName: coordinator,
            coordinatorCompany: companyName
        }

        if (newCoordinator .coordinatorName === '') {    
            setErrors(() => {
                return {
                    coordinatorName: "Wpisz koordynatora !!!"
                };
            });
            return;
        } else setErrors('');

        setCoordinator ('');

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
            managerName: manager,
            managerCompany: companyName
        }

        if (newManager.managerName === '') {    
            setErrors(() => {
                return {
                    managerName: "Wpisz kierującego zespołem !!!"
                };
            });
            return;
        } else setErrors('');

        setManager ('');

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
            supervisorName: supervisor,
            supervisorCompany: companyName
        }

        if (newSupervisor.supervisorName === '') {    
            setErrors(() => {
                return {
                    supervisorName: "Wpisz nadzorującego !!!"
                };
            });
            return;
        } else setErrors('');

        setSupervisor ('');

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
            allowerName: allower,
            allowerCompany: companyName
        }

        if (newAllower.allowerName === '') {    
            setErrors(() => {
                return {
                    allowerName: "Wpisz dopuszczającego !!!"
                };
            });
            return;
        } else setErrors('');

        setAllower ('');

        axios
        .post("http://127.0.0.1:8080/addNewAllower ", newAllower )
        .then(() => {

         })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleSubmitForm = () => {

        let workOrder = {
            whoWork: whoWork,
            companyName: companyName,
            numberOutCompany: numberOutCompany,
            numberOfAgreement: number,
            officeName: officeName,
            principalName: principal,
            coordinatingName: coordinating,
            coordinatorName: coordinator,
            managerName: manager,
            supervisorName: supervisor,
            allowerName: allower
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
        .then(() => {

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
                    <input onChange={handleWhoWork} value={whoWork} type="text" placeholder="" name="praceRealizuje" />
                    {errors.whoWork && <p className="error">{errors.whoWork}</p>}
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPorozumienia">Nr porozumienia</label>
                    </div> 
                    <input onChange={handleNumberOfAgreemnetList} value={number} type="text" placeholder="" name="nrPorozumienia" />
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
                    <input onChange={handleNumberOutCompany} value={numberOutCompany} type="text" placeholder="" name="nrPolFirmyZewnetrznej" />
                    {errors.numberOutCompany && <p className="error">{errors.numberOutCompany}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="companyName">Nazwa firmy</label>
                    </div> 
                    <input onChange={handleCompanyList} value={companyName} type="text" placeholder="" name="companyName" />
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
                    <input onChange={handleOfficeList} value={officeName} type="text" placeholder="" name="nazwaBiura" />
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
                    <input onChange={handlePrincipalList} value={principal} type="text" placeholder="" name="poleceniodawca" />
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
                    <input onChange={handleCoordinatingList} value={coordinating} type="text" placeholder="" name="koordynujący" />
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
                    <input onChange={handleCoordinatorList} value={coordinator} type="text" placeholder="" name="koordynator" />
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
                    <input onChange={handleAllowerList} value={allower} type="text" placeholder="" name="dopuszczający" />
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
                    <input onChange={handleManagerList} value={manager} type="text" placeholder="" name="kierującyZespołem" />
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
                    <input onChange={handleSupervisorList} value={supervisor} type="text" placeholder="" name="nadzorEksploatacyjny" />
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
                <button onClick={handleSubmitForm} type="submit">Zapisz</button>
            </form>
            {openModal.companyName && <ModalCompanyName setOpenModal={setOpenModal} handleAddCompanyName={handleAddCompanyName}/>}

            {openModal.numberOfAgreement && <ModalNumberOfAgreement setOpenModal={setOpenModal} handleAddNumberOfAgreement={handleAddNumberOfAgreement}/>}

            {openModal.officeName && <ModalOfficeName setOpenModal={setOpenModal} handleAddOfficeName={handleAddOfficeName}/>}

            {openModal.principalName && <ModalPrincipal setOpenModal={setOpenModal} handleAddPrincipal={handleAddPrincipal} companyName={companyName}/>}

            {openModal.coordinatingName && <ModalCoordinating setOpenModal={setOpenModal} handleAddCoordinating={handleAddCoordinating} companyName={companyName}/>}

            {openModal.coordinatorName && <ModalCoordinator setOpenModal={setOpenModal} handleAddCoordinator={handleAddCoordinator} companyName={companyName}/>}

            {openModal.managerName && <ModalManager setOpenModal={setOpenModal} handleAddManager={handleAddManager} companyName={companyName}/>}

            {openModal.supervisorName && <ModalSupervisor setOpenModal={setOpenModal} handleAddSupervisor={handleAddSupervisor} companyName={companyName}/>}

            {openModal.allowerName && <ModalAllower setOpenModal={setOpenModal} handleAddAllower={handleAddAllower} companyName={companyName}/>}
        </div>

    )
}

export default WorkRegister;