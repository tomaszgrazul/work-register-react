import './App.css';
import { useState } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import WorkRegister from './WorkRegister';

function App() {


  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
      {/* <WorkRegister /> */}
    </div>
  );
}

export default App;
