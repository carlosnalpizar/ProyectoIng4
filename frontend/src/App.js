import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import InicioAnalistas from './Paginas/InicioAnalistas';
import RegistroAnalista from './Paginas/registroAnalista';
import RegistroPrestamo from './Paginas/registroPrestamo';
import MantenimientoCliente from './Paginas/mantenimientoClientes';
import Informacion from './Paginas/Informacion';
import GestionClientes from './Paginas/mantenimientoClientes';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

const App = () => {
  const [role, setRole] = useState(''); // Manejar el rol en el estado global

  return (
    <Router>
      <Navbar role={role} setRole={setRole} /> {/* Pasar el rol y setRole */}
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
