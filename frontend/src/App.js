import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import InicioAnalistas from './Paginas/InicioAnalistas';
import RegistroAnalista from './Paginas/registroAnalista';
import RegistroPrestamo from './Paginas/registroPrestamo';
import MantenimientoCliente from './Paginas/mantenimientoClientes';
import Informacion from './Paginas/Informacion';
import GestionClientes from './Paginas/mantenimientoClientes';
import FormalizacionPrestamos from './Paginas/formalizacionPrestamos';
import { getProfile } from './api/Login'; 
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

const App = () => {
  const [role, setRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        console.log('Usuario logueado:', profile);
        setRole(profile.rol); 
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
        setIsAuthenticated(false); 
      }
    };

    fetchProfile();
  }, []); 

  return (
    <Router>
      <Navbar role={role} setRole={setRole} isAuthenticated={isAuthenticated} /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/InicioAnalistas" element={<InicioAnalistas />} />
        <Route
          path="/IniciarSesion"
          element={<Login setRole={setRole} />} 
        />
        <Route path="/mantenimientoClientes" element={<MantenimientoCliente />} />
        <Route path="/RegistroAnalista" element={<RegistroAnalista />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/RegistroPrestamo" element={<RegistroPrestamo />} />
        <Route path="/GestionClientes" element={<GestionClientes />} />
        <Route path="/formalizacionPrestamos" element={<FormalizacionPrestamos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
