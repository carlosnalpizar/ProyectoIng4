import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login'; 
import Inicio from './Paginas/Inicio'; 
import InicioAnalistas from './Paginas/InicioAnalistas'; 
import RegistroAnalista from './Paginas/registroAnalista'; 
import RegistroPrestamo from './Paginas/registroPrestamo'; 
import Informacion from './Paginas/Informacion'
import './App.css'; 
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import "primereact/resources/themes/lara-light-cyan/theme.css";  
import "primereact/resources/primereact.min.css";            
import "primeicons/primeicons.css";            
import Navbar from './componentes/Navbar';   
import Footer from './componentes/Footer';            

const App = () => {
  return (
   
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/InicioAnalistas" element={<InicioAnalistas />} />
        <Route path="/IniciarSesion" element={<Login />} />
        <Route path="/RegistroAnalista" element={<RegistroAnalista />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/RegistroPrestamo" element={<RegistroPrestamo />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
