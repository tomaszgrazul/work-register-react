import './View.css'
import logo from "../img/logo_EG.png"


const View = () => {


return (
    <div className='headerMain'>
        <div className="headerMain1">
            <div className='header1'> 
                <img src={logo} alt="logo" />
            </div>
            <div className='header2'>
                <div className='header21'>
                    <p className='p1'>Zał. nr 7 do EG 050801</p>
                    <p className='regNumber'>Nr w rejestrze EuRoPolGaz: 23/DEZ/2024</p>
                    <div className='header211'>
                        <p>Polecenie pisemne nr</p>
                        <p className='orderNumber'>01/01/2024</p>
                    </div>
                </div>
                <div className='header22'>
                    <p className='p2'>Wyd. 02</p>
                    <p className='p3'>(wypełnia wykonawca zewnętrzny)</p>
                    <div className='header221'>
                        <p>Data:</p>
                        <p className='orderDate'>05.01.2024</p>
                    </div>
                </div>
                <div className='header23'>
                    <p>Godzina:</p>
                    <p className='orderHour'>11.00</p>
                </div>
                <div className='headerMainText'>
                    <h2>Polecenie pisemne wykonania prac przy urządzeniach energetycznych</h2>
                </div>
            </div>
        </div>

        <div className='headerMain2'>
            <div className='companyNameView'>
                <p>Nazwa firmy</p>
                <div className='companyNameView1'>     
                    <p>Siemens Energy Sp. z o.o.</p>
                    <p>03-821 Warszawa</p>
                    <p>ul. Żupnicza 11</p>      
                </div>
            </div>

            <div className='header3'>
                <p>Nr porozumienia</p>
                <div className='header31'>
                    <p className='agreementNumber'>DEZ/2/2024</p>
                    <p>Pracodawca ustalony w Porozumieniu</p>
                    <p className='companyAgreement'>Siemens Energy sp. z o.o.</p>
                </div>
            </div>

            <div className='header3'>
                <p>Miejsce wykonywania pracy</p>
                <p className='workPLace'>Tuco 3 - TG Zambrów</p>
            </div>

            <div className='header3'>
                <p>Planowana data rozpoczęcia</p>
                <div className='header31'>
                    <p className='startData'>15-01-2024</p>
                    <p>Planowana data zakończenia</p>
                    <p className='stopData'>19-01-2024</p>
                </div>
            </div>

        </div>
    </div>
)

}

export default View;