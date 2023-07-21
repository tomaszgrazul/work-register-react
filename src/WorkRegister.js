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
    const [errorsWhoWork, setErrorsWhoWork] = useState({
        whoWork: ''
    });

    const [openModalCompanyName, setOpenModalCompanyName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [errorsCompanyName, setErrorsCompanyName] = useState({
        companyName: ''
    });

    const [numberOutCompany, setNumberOutCompany] = useState('');
    const [errorsNumberOutCompany, setErrorsNumberOutCompany] = useState({
        numberOutCompany: ''
    });

    const [openModalNumberOfAgreement, setOpenModalNumberOfAgreement] = useState(false);
    const [number, setNumber] = useState('');
    const [errorsNumberOfAgreemnet, setErrorsNumberOfAgreemnet] = useState({
        numberOfAgreement: ''
    });
 
    const [openModalOfficeName, setOpenModalOfficeName] = useState(false);
    const [officeName, setOfficeName] = useState('');
    const [errorsOfficeName, setErrorsOfficeName] = useState({
        officeName: ''
    });

    const [openModalPrincipal, setOpenModalPrincipal] = useState(false);
    const [principal, setPrincipal] = useState('');
    const [errorsPrincipal, setErrorsPrincipal] = useState({
        principalName: ''
    });

    const [openModalCoordinating, setOpenModalCoordinating] = useState(false);
    const [coordinating, setCoordinating] = useState('');
    const [errorsCoordinating, setErrorsCoordinating] = useState({
        coordinatingName: ''
    });

    const [openModalCoordinator, setOpenModalCoordinator] = useState(false);
    const [coordinator, setCoordinator] = useState('');
    const [errorsCoordinator, setErrorsCoordinator] = useState({
        coordinatorName: ''
    });

    const [openModalManager, setOpenModalManager] = useState(false);
    const [manager, setManager] = useState('');
    const [errorsManager, setErrorsManager] = useState({
        managerName: ''
    });

    const [openModalSupervisor, setOpenModalSupervisor] = useState(false);
    const [supervisor, setSupervisor] = useState('');
    const [errorsSupervisor, setErrorsSupervisor] = useState({
        supervisorName: ''
    });

    const [openModalAllower, setOpenModalAllower] = useState(false);
    const [allower, setAllower] = useState('');
    const [errorsAllower, setErrorsAllower] = useState({
        allowerName: ''
    });
    

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
            setErrorsCompanyName(() => {
                return {
                    companyName: "Wpisz nazwę firmy !!!"
                };
            });
            return;
        } else setErrorsCompanyName('');

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
            setErrorsNumberOfAgreemnet(() => {
                return {
                    numberOfAgreement: "Wpisz numer porozumienia !!!"
                };
            });
            return;
        } else setErrorsNumberOfAgreemnet('');

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
            setErrorsOfficeName(() => {
                return {
                    officeName: "Wpisz nazwę biura !!!"
                };
            });
            return;
        } else setErrorsOfficeName('');

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
            setErrorsPrincipal(() => {
                return {
                    principalName: "Wpisz poleceniodawcę !!!"
                };
            });
            return;
        } else setErrorsPrincipal('');

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
            setErrorsCoordinating (() => {
                return {
                    coordinatingName: "Wpisz koordynującego !!!"
                };
            });
            return;
        } else setErrorsCoordinating ('');

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
            setErrorsCoordinator (() => {
                return {
                    coordinatorName: "Wpisz koordynatora !!!"
                };
            });
            return;
        } else setErrorsCoordinator ('');

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
            setErrorsManager (() => {
                return {
                    managerName: "Wpisz kierującego zespołem !!!"
                };
            });
            return;
        } else setErrorsManager ('');

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
            setErrorsSupervisor (() => {
                return {
                    supervisorName: "Wpisz nadzorującego !!!"
                };
            });
            return;
        } else setErrorsSupervisor ('');

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
            setErrorsAllower (() => {
                return {
                    allowerName: "Wpisz dopuszczającego !!!"
                };
            });
            return;
        } else setErrorsAllower ('');

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
            setErrorsWhoWork (() => {
                return {
                    whoWork: "Wpisz kto realizuje prace !!!"
                };
            });
            return;
        } else setErrorsWhoWork ('');

        if (workOrder.numberOutCompany === '') {  
            setErrorsNumberOutCompany (() => {
                return {
                    numberOutCompany: "Wpisz numer polecenia !!!"
                };
            });
            return;
        } else setErrorsNumberOutCompany ('');

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
                    {errorsWhoWork.whoWork && <p className="error">{errorsWhoWork.whoWork}</p>}
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
                        setOpenModalNumberOfAgreement(true);
                    }}>Wybierz</button>
                    {errorsNumberOfAgreemnet.numberOfAgreement && <p className="error">{errorsNumberOfAgreemnet.numberOfAgreement}</p>}
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPolFirmyZewnetrznej">Nr polecenia firmy zew.</label>
                    </div> 
                    <input onChange={handleNumberOutCompany} value={numberOutCompany} type="text" placeholder="" name="nrPolFirmyZewnetrznej" />
                    {errorsNumberOutCompany.numberOutCompany && <p className="error">{errorsNumberOutCompany.numberOutCompany}</p>}
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
                        setOpenModalCompanyName(true);
                    }}>Wybierz</button>
                    {errorsCompanyName.companyName && <p className="error">{errorsCompanyName.companyName}</p>}
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
                        setOpenModalOfficeName(true);
                    }}>Wybierz</button>
                    {errorsOfficeName.officeName && <p className="error">{errorsOfficeName.officeName}</p>}
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
                        setOpenModalPrincipal(true);
                    }}>Wybierz</button>
                    {errorsPrincipal.principalName && <p className="error">{errorsPrincipal.principalName}</p>}
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
                        setOpenModalCoordinating(true);
                    }}>Wybierz</button>
                    {errorsCoordinating.coordinatingName && <p className="error">{errorsCoordinating.coordinatingName}</p>}
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
                        setOpenModalCoordinator(true);
                    }}>Wybierz</button>
                    {errorsCoordinator.coordinatorName && <p className="error">{errorsCoordinator.coordinatorName}</p>}
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
                        setOpenModalAllower(true);
                    }}>Wybierz</button>
                    {errorsAllower.allowerName && <p className="error">{errorsAllower.allowerName}</p>}
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
                        setOpenModalManager(true);
                    }}>Wybierz</button>
                    {errorsManager.managerName && <p className="error">{errorsManager.managerName}</p>}
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
                        setOpenModalSupervisor(true);
                    }}>Wybierz</button>
                    {errorsSupervisor.supervisorName && <p className="error">{errorsSupervisor.supervisorName}</p>}
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
            {openModalCompanyName && <ModalCompanyName setModalCompanyName={setOpenModalCompanyName} handleAddCompanyName={handleAddCompanyName}/>}

            {openModalNumberOfAgreement && <ModalNumberOfAgreement setModalNumberOfAgreement={setOpenModalNumberOfAgreement} handleAddNumberOfAgreement={handleAddNumberOfAgreement}/>}

            {openModalOfficeName && <ModalOfficeName setModalOfficeName={setOpenModalOfficeName} handleAddOfficeName={handleAddOfficeName}/>}

            {openModalPrincipal && <ModalPrincipal setModalPrincipal={setOpenModalPrincipal} handleAddPrincipal={handleAddPrincipal} companyName={companyName}/>}

            {openModalCoordinating && <ModalCoordinating setModalCoordinating={setOpenModalCoordinating} handleAddCoordinating={handleAddCoordinating} companyName={companyName}/>}

            {openModalCoordinator && <ModalCoordinator setModalCoordinator={setOpenModalCoordinator} handleAddCoordinator={handleAddCoordinator} companyName={companyName}/>}

            {openModalManager && <ModalManager setModalManager={setOpenModalManager} handleAddManager={handleAddManager} companyName={companyName}/>}

            {openModalSupervisor && <ModalSupervisor setModalSupervisor={setOpenModalSupervisor} handleAddSupervisor={handleAddSupervisor} companyName={companyName}/>}

            {openModalAllower && <ModalAllower setModalAllower={setOpenModalAllower} handleAddAllower={handleAddAllower} companyName={companyName}/>}
        </div>

    )
}

export default WorkRegister;