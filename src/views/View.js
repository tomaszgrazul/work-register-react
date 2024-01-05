import './View.css'


const View = () => {


return (
    <div className="headerView">
        <div className='asa'>
            <div className='regNumber'>Nr w rejestrze EuRoPolGaz 23/DEZ/2024</div>
            <div className='orderNumber'>Polecenie pisemne nr 01/01/2024</div>
        </div>
        <div className='orderDate'>Data: 05.01.2024</div>
        <div className='orderHour'>Godzina: 11.00</div>
        <div className='headerMainText'>
            <h2>Polecenie pisemne wykonania prac przy urządzeniach energetycznych</h2>
        </div>
    </div>
)

}

export default View;