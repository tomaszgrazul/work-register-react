import {useState} from "react";
import './WorkRegister.css';
import axios from "axios";
import ModalCompanyName from "./components/ModalCompanyName";
import ModalNumberOfAgreement from "./components/ModalNumberOfAgreement";
import ModalOfficeName from "./components/ModalOfficeName";
import ModalPrincipal from "./components/ModalPrincipal";
import ModalCoordinating from "./components/ModalCoordinating";
import ModalCoordinator from "./components/ModalCoordinator";

const WorkRegister = () => {

    const [openModalCompanyName, setOpenModalCompanyName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [errorsCompanyName, setErrorsCompanyName] = useState({
        companyName: ''
    });

    const [openModalNumberOfAgreement, setOpenModalNumberOfAgreement] = useState(false);
    const [number, setNumber] = useState('');
    const [errorsNumberOfAgreemnet, setErrorsNumberOfAgreemnet] = useState({
        numberOfAgreemnet: ''
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
    

    const handleCompanyList = (e) => {       
        setCompanyName(e.target.value);
    }
    const handleAddCompanyName = (addCompanyName) => {            
        setCompanyName(addCompanyName);    
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
        let newNumberOfAgreemnet = {
            number: number
        }

        if (newNumberOfAgreemnet.numberOfAgreemnet === '') {    
            setErrorsNumberOfAgreemnet(() => {
                return {
                    numberOfAgreemnet: "Wpisz numer porozumienia !!!"
                };
            });
            return;
        } else setErrorsNumberOfAgreemnet('');

        setNumber('');

        axios
        .post("http://127.0.0.1:8080/addNumberOfAgreemnet", newNumberOfAgreemnet)
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
                    <input type="text" placeholder="" name="praceRealizuje" />
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
                    {errorsNumberOfAgreemnet.numberOfAgreemnet && <p className="error">{errorsNumberOfAgreemnet.numberOfAgreemnet}</p>}
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrFirmyZewnetrznej">Nr firmy zew.</label>
                    </div> 
                    <input type="text" placeholder="" name="nrFirmyZewnetrznej" />
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
                    <input type="text" placeholder="" name="dopuszczający" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="kierującyZespołem">Kierujący zespołem</label>
                    </div> 
                    <input type="text" placeholder="" name="kierującyZespołem" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nadzorEksploatacyjny">Nadzór eksploatacyjny</label>
                    </div>     
                    <input type="text" placeholder="" name="nadzorEksploatacyjny" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <label htmlFor="rozpoczeciePracy">Rozpoczęcie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="rozpoczeciePracy" />
                </div>

                <div>
                    <label htmlFor="zakonczeniePracy">Zakończenie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="zakonczeniePracy" />
                </div>
            </form>
            {openModalCompanyName && <ModalCompanyName setModalCompanyName={setOpenModalCompanyName} handleAddCompanyName={handleAddCompanyName}/>}

            {openModalNumberOfAgreement && <ModalNumberOfAgreement setModalNumberOfAgreement={setOpenModalNumberOfAgreement} handleAddNumberOfAgreement={handleAddNumberOfAgreement}/>}

            {openModalOfficeName && <ModalOfficeName setModalOfficeName={setOpenModalOfficeName} handleAddOfficeName={handleAddOfficeName}/>}

            {openModalPrincipal && <ModalPrincipal setModalPrincipal={setOpenModalPrincipal} handleAddPrincipal={handleAddPrincipal} companyName={companyName}/>}

            {openModalCoordinating && <ModalCoordinating setModalCoordinating={setOpenModalCoordinating} handleAddCoordinating={handleAddCoordinating} companyName={companyName}/>}

            {openModalCoordinator && <ModalCoordinator setModalCoordinator={setOpenModalCoordinator} handleAddCoordinator={handleAddCoordinator} companyName={companyName}/>}
        </div>

    )
}

export default WorkRegister;