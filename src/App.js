import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [expTokenTime, setExpTokenTime] = useState(false);

  axios.defaults.baseURL = 'http://127.0.0.1:8080';
  axios.defaults.headers.common['Authorization'] = user ? user.jwt : "";
  
 
    if(user) {
      setTimeout(()=>{
        setExpTokenTime(true);
      },3600000); 
    }

  
  return (
    <div className="App">
      <AppNav user={user} setUser={setUser} expTokenTime={expTokenTime} setExpTokenTime={setExpTokenTime}/>
      <AppRoutes user={user} setUser={setUser}/> 
    </div>
  );
}

export default App;
