import React from 'react';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";  
import "primereact/resources/primereact.min.css";            
import "primeicons/primeicons.css";  


const Navbar = () => {
  return (
    <div className="login-wrapper">
      <div className="nav">
        <div className="logo">
        <img src="/img/navbar.png"  alt="Logo" style={{ width: '40px', height: '40px' }} />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Opciones de Préstamo</a>
          <a href="#" className="nav-link">Contáctenos</a>
        </div>
        <Button label="Registrarse" className="join-btn" />
      </div>
    </div>
  );
};

export default Navbar;
