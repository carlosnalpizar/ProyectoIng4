import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login'; 
import './App.css'; 
import "primereact/resources/themes/lara-light-cyan/theme.css";  
import "primereact/resources/primereact.min.css";            
import "primeicons/primeicons.css";            
import Navbar from './componentes/Navbar';               

const App = () => {
  return (
   
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
