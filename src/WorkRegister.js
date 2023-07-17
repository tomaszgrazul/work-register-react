import { useState, useEffect} from "react";
import './WorkRegister.css';
import axios from "axios";
import ModalCompanyName from "./components/ModalCompanyName";
import ModalNumberOfAgreement from "./components/ModalNumberOfAgreement";

const WorkRegister = () => {

    const [openModalCompanyName, setOpenModalCompanyName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [errorsCompanyName, setErrorsCompanyName] = useState({
        companyName: ''
    });

    const [openModalNumberOfAgreement, setOpenModalNumberOfAgreement] = useState(false);
    const [numberOfAgreemnet, setnumberOfAgreemnet] = useState('');
    const [errorsNumberOfAgreemnet, setErrorsNumberOfAgreemnet] = useState({
        numberOfAgreemnet: ''
    });
 

    const handleCompanyList = (e) => {       
        setCompanyName(e.target.value);
    }
    const handleAddCompanyName = (addCompanyName) => {            
        setCompanyName(addCompanyName);    
    }

    const handleNumberOfAgreemnet = (e) => {       
        setnumberOfAgreemnet(e.target.value);
    }
    const handleAddNumberOfAgreemnet = (addNmberOfAgreemnet) => {            
        setnumberOfAgreemnet(addNmberOfAgreemnet);    
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
        .post("http://127.0.0.1:8080/create", newCompany)
        .then(() => {
            
         })
        .catch((error) => {
            console.error(error);
        });
    };

    const addNmberOfAgreemnet = () => {
        let newNumberOfAgreemnet = {
            numberOfAgreemnet: numberOfAgreemnet
        }

        if (newNumberOfAgreemnet.numberOfAgreemnet === '') {    
            setErrorsNumberOfAgreemnet(() => {
                return {
                    numberOfAgreemnet: "Wpisz numer porozumienia !!!"
                };
            });
            return;
        } else setErrorsNumberOfAgreemnet('');

        setnumberOfAgreemnet('');

        axios
        .post("http://127.0.0.1:8080/create", newNumberOfAgreemnet)
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
                    <input onChange={handleNumberOfAgreemnet}  value={numberOfAgreemnet} type="text" placeholder="" name="nrPorozumienia" />
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
                    <input onChange={handleCompanyList}  value={companyName} type="text" placeholder="" name="companyName" />
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
                    <input type="text" placeholder="" name="nazwaBiura" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="poleceniodawca">Poleceniodawca</label>
                    </div>   
                    <input type="text" placeholder="" name="poleceniodawca" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynujący">Koordynujący</label>
                    </div>    
                    <input type="text" placeholder="" name="koordynujący" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynator">Koordynator</label>
                    </div>  
                    <input type="text" placeholder="" name="koordynator" />
                    <button>Wybierz</button>
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

            {openModalNumberOfAgreement && <ModalNumberOfAgreement setModalNumberOfAgreement={setOpenModalNumberOfAgreement} handleAddNumberOfAgreement={handleAddNumberOfAgreemnet}/>}
        </div>

    )
}

export default WorkRegister;