import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import axios from 'axios';

function App() {

  const [handleAppNav, setHandleAppNav] = useState(false);
  const [handleAppNavUsername, setHandleAppNavUserName] = useState('');
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const user = JSON.parse(localStorage.getItem('user'));
  
  axios.defaults.baseURL = 'http://127.0.0.1:8080';
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// console.log('useraaaa', user);
// useEffect(() => {
//   console.log('user', user);
// });
  axios.defaults.headers.common['Authorization'] = user ? user.jwt : "";
  
  const handleAppRoutes = (loginOk, username) => {
    // console.log('stateAppRoutes', loginOk);
    setHandleAppNav(loginOk);
    setHandleAppNavUserName(username);
  }
  

  return (
    <div className="App">
      <AppNav handleAppNav={handleAppNav} handleAppNavUsername={handleAppNavUsername}/>
      <AppRoutes handleAppRoutes={handleAppRoutes}/>
      {/* <WorkRegister /> */}
    </div>
  );
}

export default App;
