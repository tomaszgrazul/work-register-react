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
                <p className='p4'>Nazwa firmy</p>
                <div className='companyNameView1'>     
                    <p>Siemens Energy Sp. z o.o.</p>
                    <p>03-821 Warszawa</p>
                    <p>ul. Żupnicza 11</p>      
                </div>
            </div>

            <div className='header3'>
                <p className='p4'>Nr porozumienia</p>
                <div className='header31'>
                    <p className='agreementNumber'>DEZ/2/2024</p>
                    <p className='p5'>Pracodawca ustalony w Porozumieniu</p>
                    <p className='companyAgreement'>Siemens Energy sp. z o.o.</p>
                </div>
            </div>

            <div className='header3'>
                <p className='p4'>Miejsce wykonywania pracy</p>
                <p className='workPLace'>Tuco 3 - TG Zambrów</p>
            </div>

            <div className='header3'>
                <p className='p4'>Planowana data rozpoczęcia</p>
                <div className='header31'>
                    <p className='startData'>15-01-2024</p>
                    <p>Planowana data zakończenia</p>
                    <p className='stopData'>19-01-2024</p>
                </div>
            </div>
        </div>

        <div className='headerMain3'>
            <p className='p6'>1. Osoby wyznaczone do organizowania i nadzorowania pracy</p>
            <p>Znajdują się na liście osób upoważnionych i uprawnionych.</p>
            <p>Koordynujący, Koordynator ds. BHP i Dopuszczający zgodnie z wykazem osób upoważnionych do pełnienia danej funkcji.</p>
            <div className='header3'>
                <p className='p4'></p>
                <div className='header31'>
                    <p className='p12'>Imię Nazwisko / stanowisko</p>
                    <p className='p13'>Telefon:</p>
                    <p className='p14'>Podpis:</p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Poleceniodawca</p>
                    <p className='p9'>imię i nazwisko</p>
                </div>
                <div className='header31'>
                    <p className='p7'>Dariusz Walter</p>
                    <p className='p10'>603097603</p>
                    <p className='p11'>alala</p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Koordynator ds. BHP</p>
                    <p className='p9'>imię i nazwisko lub stanowisko</p>
                </div>
                <div className='header31'>
                    <p className='p7'></p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Koordynujący</p>
                    <p className='p9'>imię i nazwisko lub stanowisko</p>
                </div>
                <div className='header31'>
                    <p className='p7'></p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Dopuszczający</p>
                    <p className='p9'>imię i nazwisko lub stanowisko</p>
                </div>
                <div className='header31'>
                    <p className='p7'></p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Kierujący zespołem</p>
                    <p className='p9'>imię i nazwisko</p>
                </div>
                <div className='header31'>
                    <p className='p7'></p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <p>* W sytuacji gdy w trakcie wykonania pracy niezbędny jest udział więcej niż jednej osoby Koordynatora ds. BHP, Koordynującego lub dopuszczającego dozwolone jest dołączenie do polecenia załącznika z zestawieniem osób funkcyjnychzgodnie z powyższym wzorem</p>
        </div>
    </div>
)

}

export default View;