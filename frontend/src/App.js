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
import { getProfile } from './api/Login'; // Asegúrate de que esta ruta sea correcta
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

const App = () => {
  const [role, setRole] = useState(''); // Manejar el rol en el estado global
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Cargar el perfil del usuario al montar el componente
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(); // Llama al backend para obtener el perfil
        console.log('Usuario logueado:', profile);
        setRole(profile.rol); // Actualiza el rol en el estado global
        setIsAuthenticated(true); // Usuario autenticado
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
        setIsAuthenticated(false); // Usuario no autenticado
      }
    };

    fetchProfile(); // Llama a fetchProfile al montar el componente
  }, []); // Se ejecuta solo una vez al montar

  return (
    <Router>
      <Navbar role={role} setRole={setRole} isAuthenticated={isAuthenticated} /> {/* Pasar el rol, setRole y estado de autenticación */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/InicioAnalistas" element={<InicioAnalistas />} />
        <Route
          path="/IniciarSesion"
          element={<Login setRole={setRole} />} // Pasar setRole al Login
        />
        <Route path="/mantenimientoClientes" element={<MantenimientoCliente />} />
        <Route path="/RegistroAnalista" element={<RegistroAnalista />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/RegistroPrestamo" element={<RegistroPrestamo />} />
        <Route path="/GestionClientes" element={<GestionClientes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
