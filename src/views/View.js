import './View.css'
import logo from "../img/logo_EG.png"
import { useEffect, useState } from 'react'

const View = (props) => {

    const [inputEnable, setInputEnable] = useState({
        orderNumber: false,
        orderDate: false,
        orderTime: false,
        companyName: false
    });

    // useEffect(() => {
    //     console.log("qqq", inputEnable);
    // }, [inputEnable]);

    const handleValueChange = (e) => {
        const target = e.target;
        const name = e.target.name;

        // setReadValue ({
        //     ...readValue,
        //     [name]: target.value,
        // });

        // setErrors( {    
        //     ...errors, 
        //     [name]: ""
        // });

    };

    const handleSetInputEnableTrue = (name) => {
        setInputEnable({
            ...inputEnable,
            [name]: true
        });
    }

    const handleSetInputEnableFalse = (name) => {
        setInputEnable({
            ...inputEnable,
            [name]: false
        });
    }

    // const handleSetInputEnable = (name) => {
    //     Object.entries(inputEnable).find((value) => {
    //         if (value[0] === name ) {
    //             console.log('aaa', value[1])
    //             setChangeValue(value[1]);
    //             setChangeValue(prevChangeValue => !prevChangeValue);
    //             console.log('bbb', changeValue)
    //             setInputEnable({
    //                 ...inputEnable,
    //                 [name]: changeValue
    //             });
    //         }     
    //     })
    // }   
            

return (
    <div className='headerMain'>
        <div className="headerMain1">
            <div className='header1'> 
                <img src={logo} alt="logo" />
            </div>
            <div className='header2'>
                <div className='header21'>
                    <p className='p1'>Zał. nr 7 do EG 050801</p>
                    <p className='regNumber'>Nr w rejestrze EuRoPolGaz: {props.moveWorkRegister.numberRegistration}</p>
                    <div className='header211'>
                        <p>Polecenie pisemne nr</p>
                        {inputEnable.orderNumber && <input className='inputView inputOrderNumber' onKeyDown={(e) => {
                            if ( e.key === 'Enter' ) {
                                handleSetInputEnableFalse('orderNumber')
                            }
                        }} type="text" autoFocus/>}
                        {!inputEnable.orderNumber && <p className='orderNumber' onClick={() => handleSetInputEnableTrue('orderNumber')}
                        >01/01/2024</p>}
                    </div>
                </div>
                <div className='header21'>
                    <p className='p2'>Wyd. 02</p>
                    <p className='p3'>(wypełnia wykonawca zewnętrzny)</p>
                    <div className='header221'>
                        <p>Data:</p>
                        {inputEnable.orderDate && <input className='inputView inputOrderNumber' onKeyDown={(e) => {
                            if ( e.key === 'Enter' ) {
                                setInputEnable( {
                                    ...inputEnable,
                                    orderDate: false
                                });
                            }
                        }} type="date" />}
                        {!inputEnable.orderDate && <p className='orderDate' onClick={() => handleSetInputEnableTrue('orderDate')}
                        >05.01.2024</p>}
                    </div>
                </div>
                <div className='header23'>
                    <p>Godzina:</p>
                    {inputEnable.orderHour && <input className='inputView inputOrderNumber' onKeyDown={(e) => {
                            if ( e.key === 'Enter' ) {
                                setInputEnable( {
                                    ...inputEnable,
                                    orderHour: false
                                });
                            }
                        }} type="date" />}
                        {!inputEnable.orderHour && <p className='orderHour' onClick={() => handleSetInputEnableTrue('orderHour')}
                        >11:00</p>}
                    {/* <p className='orderHour'>11.00</p> */}
                </div>
                <div className='headerMainText'>
                    <h2>Polecenie pisemne wykonania prac przy urządzeniach energetycznych</h2>
                </div>
            </div>
        </div>

        <div className='headerMain2'>
            <div className='companyNameView'>
                <p className='p4'>Nazwa firmy</p>
                {/* <div className={inputEnable.companyName ? '' : 'companyNameView1'}>   */}
                {inputEnable.companyName && <input className='inputCompanyName inputView' onKeyDown={(e) => {
                            if ( e.key === 'Enter' ) {
                                setInputEnable( {
                                    ...inputEnable,
                                    companyName: false
                                });
                            }
                        }} onChange={handleValueChange} type="text" value={props.moveWorkRegister.companyName} name='companyName' autoFocus/>}
                {!inputEnable.companyName && <p className='companyNameView1' name='companyName' onClick={handleSetInputEnableTrue}>
                {props.moveWorkRegister.companyName}</p>} 
                {/* </div> */}
            </div>

            <div className='header3'>
                <p className='p4'>Nr porozumienia</p>
                <div className='header9'>
                    <p className='agreementNumber'></p>
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
                <div className='header9'>
                    <p className='startData'>{props.moveWorkRegister.startDate}</p>
                    <p className='p5'>Planowana data zakończenia</p>
                    <p className='stopData'>{props.moveWorkRegister.stopDate}</p>
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
                <div className='header32'>
                    <p className='p7'>{props.moveWorkRegister.principalName}</p>
                    <p className='p10'>603097603</p>
                    <p className='p11'>alala</p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Koordynator ds. BHP</p>
                    <p className='p9'>imię i nazwisko lub stanowisko</p>
                </div>
                <div className='header32'>
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
                <div className='header32'>
                    <p className='p7'>{props.moveWorkRegister.coordinatingName}</p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Dopuszczający</p>
                    <p className='p9'>imię i nazwisko lub stanowisko</p>
                </div>
                <div className='header32'>
                    <p className='p7'>{props.moveWorkRegister.managerName}</p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <div className='header3'>
                <div className='header4'>
                    <p className='p8'>Kierujący zespołem</p>
                    <p className='p9'>imię i nazwisko</p>
                </div>
                <div className='header32'>
                    <p className='p7'>{props.moveWorkRegister.supervisorName}</p>
                    <p className='p10'></p>
                    <p className='p11'></p>
                </div>
            </div>

            <p>* W sytuacji gdy w trakcie wykonania pracy niezbędny jest udział więcej niż jednej osoby Koordynatora ds. BHP, Koordynującego lub dopuszczającego dozwolone jest dołączenie do polecenia załącznika z zestawieniem osób funkcyjnychzgodnie z powyższym wzorem</p>
        </div>

        <div className='headerMain3'>
            <p className='p6'>2. Podstawowe wymagania bezpieczeństwa</p>
            <p className='p15'>Warunki i środki ochrony niezbędne do zapewnienia bezpiecznego przygotowania i wykonania poleconych prac wynikających z zagrożeń występujących w strefie pracy i w jej bezpośrednim sąsiedztwie.</p>
            <p>Ryzyko prowadzenia prac jest na poziomie akceptowalnym.</p>
            <p>Omówiono przebieg pracy i zagrożenia mogące wystąpić.</p>
            <p className='p16'>Dodatkowe uzgodnienia/wymagania/środki ostrożności</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
        </div>

        <div className='headerMain3'>
            <div className='header5'>
                <p className='p6'>3. Wyznaczona strefa pracy</p>
                <p>(urządzenie, instalacja, pomieszczenie kubaturowe, zespół urządzeń, itp..)</p>
            </div>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
        </div>

        <div className='headerMain3'>
            <div className='header5'>
                <p className='p6'>4. Zakres prac</p>
                <p>(opis wykonywanych czynności, zagrożeń oraz warunki i środki bezpiecznego wykonywania pracy)</p>
            </div>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
        </div>

        <div className='headerMain3'>
            <div className='header5'>
                <p className='p6'>5. Sposób przygotowania strefy pracy</p>
                <p>(opis niezbędnych czynności, które należy wykonać w celu przygotowania strefy pracy w celu bezpiecznej realizacji prac)</p>
            </div>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
        </div>

        <div className='headerMain3'>
            <p className='p6'>6. Sposób likwidacji strefy pracy</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
        </div>

        <div className='headerMain3'>
            <p className='p6'>7. Dopuszczenie do prac zasadniczych, przekazanie strefy pracy</p>
            <div className='header3'>
                <p className='p6'>Koordynujący</p>
                <p>Zezwolenie na przygotowanie strefy pracy zgodnie z określonym zakresem oraz kolejnością wykonywanych czynności.</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.coordinatorName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div>

            <div className='header3'>
                <p className='p6'>Dopuszczający</p>
                <p>Przygotowano strefę pracy zgodnie z pkt 5 polecenia. Poinformowano Kierującego Zespołem o zagrożeniach występujących w strefie pracy i w jej bezpośrednim sąsiedztwie.</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.managerName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div>

            <div className='header3'>
                <p className='p6'>Kierujący zespołem</p>
                <p>Przejmuje strefę pracy bez uwag. Potwierdzam, że zostałem zapoznany z zagrożeniami występującymi w strefie i w jej bezpośrednim sąsiedztwie.</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.supervisorName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'>aaa</p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'>28.06.1973</p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'>10:30</p>
                </div>
            </div>            
        </div>

        <div className='headerMain3'>
            <p className='p6'>8. Zespół osób upoważnionych i uprawnionych do wykonywania pracy poleconej</p>
            <p>Przeczytałem i zrozumiałem treść polecenia pisemnego. Oświadczam, że będę wykonywał pracę zgodnie z instrukcją organizacji bezpiecznej pracy przy urzadzeniach energetycznych oraz procedurami i zasadami BHP i ochrony środowiska.</p>
            <p className='p15'>Zostałem zapoznany z występującymi zagrożeniami w strefie pracy i w jej bezpośrednim sąsiedztwie oraz z metodami bezpiecznego wykonywania pracy.</p>
            <div className='header3'>
                <p className='p19'></p>
                <p className='p20'>Imię i Nazwisko</p>
                <p className='p21'></p>
                <p className='p22'>Podpis:</p>
                <p className='p23'>Data i godzina:</p>
            </div>
            <div className='header3'>
                <p className='p19'>1.</p>
                <p className='p18'>Antoni Czerwiński</p>
                <p className='p21'></p>
                <p className='p11'>aaa</p>
                <p className='p10'>12.18</p>
            </div>
            <div className='header3'>
                <p className='p19'>2.</p>
                <p className='p18'>Antoni Czerwiński</p>
                <p className='p21'></p>
                <p className='p11'>aaa</p>
                <p className='p10'>12.18</p>
            </div>
        </div>

        <div className='headerMain3'>
            <p className='p6'>9. Przerwy w pracy wymagajace powtórnego dopuszczenia</p>
            <p className='p15'>Nie wymaga się ponownego dopuszczenia do pracy po przerwie, jeżeli w czasie trwania przerwy nie zostało stwierdzone pogorszenie zabezpieczenia strefy pracy oraz warunków bezpiecznego wykonywania pracy</p>
            <div className='header3'>
                <p className='p24'></p>
                <p className='p29'></p>
                <p className='p25'>Data i godzina:</p>
                <p className='p26'>Podpis Koordynujacego:</p>
                <p className='p26'>Podpis Dopuszczającego:</p>
                <p className='p26'>Podpis Kierujacego zespołem:</p>
            </div>
            <div className='header3'>
                <p className='p24'>1.</p>
                <p className='p27'>Przerwanie pracy</p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
            <div className='header3'>
                <p className='p24'></p>
                <p className='p27'>Wznowienie pracy</p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
            <div className='header3'>
                <p className='p24'>2.</p>
                <p className='p27'>Przerwanie pracy</p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
            <div className='header3'>
                <p className='p24'></p>
                <p className='p27'>Wznowienie pracy</p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
            <p>* W sytuacji gdy w trakcie prowadzenia prac wystapi wieksza liczba przerw, dozwolone jest dołączenie do polecenia załącznika z zestawieniem kolejnych przerw zgodnie z powyższym wzorem</p>
        </div>

        <div className='headerMain3'>
            <p className='p6'>10. Zakończenie prac i likwidacja strefy pracy</p>
            <p className='p15'></p>
            <div className='header8'>
                <p className='p6'>Kierujący zespołem</p>
                <p className='p15'>Praca została zakończona, materiały i narzędzia usunięto, członków zespołu ze strefy wyprowadzono. Pracę wykonano w pełnym zakresie TAK/NIE (niepotrzebne skreslić). Przyczyny nie wykonania pracy w pełnym zakresie:</p>
                <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.supervisorName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'>aaa</p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'>28.06.1973</p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'>10:30</p>
                </div>
            </div>  

            <div className='header3'>
                <p className='p6'>Dopuszczający</p>
                <p>Sprawdzono wykonanie pracy, instalacja jest kompletna, strefa pracy jest bezpieczna i uprzatnięta. Usunieto zastosowane zabezpieczenia.</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.managerName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div> 

            <div className='header3'>
                <p className='p6'>Koordynujący</p>
                <p>Prace zakonńczono, strefa pracy zlikwidowana. Potwierdzam: [ ] urzadzenie/a trwale wyłączone z ruchu; [ ] gotowość urzadzeń i/lub instalacji do ruchu próbnego lub przekazania do eksploatacji (zaznaczyć odpowiedni kwadrat).</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>{props.moveWorkRegister.coordinatorName}</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div>     

            <div className='header3'>
                <p className='p6'>Dyspozytor Tłoczni</p>
                <p>O zakończeniu prac poinformowano: [ ] KDG; [ ] Dyspozytora Działu Dyspozycji EuRoPol GAZ s.a.,(zaznaczyć odpowiedni kwadrat).</p>
            </div>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'>Antek Policmajster</p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div>     
        </div>

        <div className='headerMain3'>
            <p className='p6'>11. Zmiany w poleceniu pisemnym (Poleceniodawca)</p>
            <div className='header8'>
                <p className='p15'>Zmianie mogą ulec: data zakończenia pracy, godzina rozpoczecia i zakończenia prac, skład zespołu roboczego</p>
                <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            </div>
            <div className='header3'>
                <p className='p29'>Data i godzina:</p>
                <p className='p25'>Podpis Poleceniodawcy:</p>
                <p className='p26'>Podpis Koordynujacego:</p>
                <p className='p26'>Podpis Dopuszczającego:</p>
                <p className='p26'>Podpis Kierujacego zespołem:</p>
            </div>
            <div className='header3'>
                <p className='p27'></p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
            <p className='p15'></p>
            <p className='p15'>................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
            <div className='header3'>
                <p className='p29'>Data i godzina:</p>
                <p className='p25'>Podpis Poleceniodawcy:</p>
                <p className='p26'>Podpis Koordynujacego:</p>
                <p className='p26'>Podpis Dopuszczającego:</p>
                <p className='p26'>Podpis Kierujacego zespołem:</p>
            </div>
            <div className='header3'>
                <p className='p27'></p>
                <p className='p30'></p>
                <p className='p28'></p>
                <p className='p28'></p>
                <p className='p28'></p>
            </div>
        </div>

        <div className='headerMain3'>
            <p className='p6 p15'>12. Polecenie anulowano (Poleceniodawca)</p>
            <div className='header3'>
                <div className='header6'>
                    <p className='p8'>Imię i Nazwisko</p>
                    <p className='p18'></p>
                </div>
                <div className='header7'>
                    <p>Podpis:</p>
                    <p className='p7'></p>
                </div>
                <div className='header7'>
                    <p>Data:</p>
                    <p className='p17'></p>
                </div>
                <div className='header7'>
                    <p>Godzina:</p>
                    <p className='p17'></p>
                </div>
            </div>  
            <p className='p15'></p>
        </div>

        <div className='headerMain3'>
            <p className='p6 p15'>13. Lista załączników</p>
            <p>Załącznik nr 1 - Karta pomiarów czynników szkodliwych</p>
            <p>Załącznik nr 2 - Karta przygotowania strefy pracy, wykonania i zakonczenia pracy</p>
            <p>Załącznik nr </p>
            <p className='p15'>Załącznik nr </p>
            <p className='p15'></p>
        </div>

        <div className='headerMain3'>
            <p className='p6 p15'>14. Wymagane środki ochrony indywidualnej, sprzętu ppoż. i bhp</p>
            <div className='header22'>
                <div>
                    <p className='p15'>[ ] Odzież trudnopalna i elektrostatyczna ........................................................................................................................................</p>
                    <p className='p15'>[ ] Odzież ochronna ..................................................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony głowy ........................................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony kończyn górnych ..................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony kończyn dolnych ..................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony twarzy .......................................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony oczu ...........................................................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony słuchu ........................................................................................................................................................................</p>
                    <p className='p15'>[ ] Inne ............................................................................................................................................................................................................</p>
                </div>
                <div>
                    <p className='p15'>[ ] Środki ochrony układu oddechowego .......................................................................................................................................</p>
                    <p className='p15'>[ ] Środki ochrony przed upadkiem z wysokości .........................................................................................................................</p>
                    <p className='p15'>[ ] Środki izolujące cały organizm ......................................................................................................................................................</p>
                    <p className='p15'>[ ] Gaśnice proszkowe lub śniegowe ................................................................................................................................................</p>
                    <p className='p15'>[ ] Koc gaśniczy ..........................................................................................................................................................................................</p>
                    <p className='p15'>[ ] Radiotelefony ........................................................................................................................................................................................</p>
                    <p className='p15'>[ ] Metanomierz .........................................................................................................................................................................................</p>
                    <p className='p15'>[ ] Tlenomierz ..............................................................................................................................................................................................</p>
                </div>
            </div>
        </div>

    </div>
)

}

export default View;