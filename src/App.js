import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import axios from 'axios';
import Order from './components/Order'

function App() {

  const [handleAppNav, setHandleAppNav] = useState(false);
  const [handleAppNavUsername, setHandleAppNavUserName] = useState('');
  const [clickWorkOrderList, setClickWorkOrderList] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // const user = JSON.parse(localStorage.getItem('user'));
  
  axios.defaults.baseURL = 'http://127.0.0.1:8080';
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// console.log('useraaaa', user);
// useEffect(() => {
//   console.log('user', user);
// });
  axios.defaults.headers.common['Authorization'] = user ? user.jwt : "";
  
  const handleAppRoutes = (loginOk) => {
    // console.log('stateAppRoutes', loginOk);
    setHandleAppNav(loginOk);
  }

  const handleAppRoutesClic = (click) => {
    // console.log('click', click);
    setClickWorkOrderList(click);
  }

  const handleLogout = (logoutOk) => {
    // console.log('statelogout', logoutOk);
    handleAppRoutes(logoutOk);
    // setHandleLoginMessage(logoutOk);
}
  

  return (
    <div className="App">
      <AppNav handleAppNav={handleAppNav} handleLogout={handleLogout} user={user}/>
      {!clickWorkOrderList && <Order />}
      <AppRoutes handleAppRoutes={handleAppRoutes} handleAppRoutesClic={handleAppRoutesClic}/>  
    </div>
  );
}

export default App;
