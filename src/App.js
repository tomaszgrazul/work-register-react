import './App.css';
import { useState } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

function App() {

  const [handleAppNav, setHandleAppNav] = useState(false);
  const [handleAppNavUsername, setHandleAppNavUserName] = useState('');
  
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
