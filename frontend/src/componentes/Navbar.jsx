import React, { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import RegistrarCliente from "../Modals/RegistrarCliente";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // Estado para alternar menú

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleRegister = (formData) => {
    console.log("Datos registrados:", formData);
    handleCloseModal();
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="nav">
          {/* Logo */}
          <div className="logo" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/img/navbar.png"
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#005f73" }}>
              Ouro Bank
            </span>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Toggle menu"
          >
            <i className="pi pi-bars"></i>
          </button>

          {/* Enlaces del menú */}
          <div className={`nav-links ${menuActive ? "active" : ""}`}>
            <a href="/" className="nav-link">
              Inicio
            </a>
            <a href="/IniciarSesion" className="nav-link">
              Iniciar Sesión
            </a>
            <a href="#" className="nav-link">
              Contáctenos
            </a>
          </div>

          <RegistrarCliente
            visible={isModalVisible}
            onHide={handleCloseModal}
            onRegister={handleRegister}
            className="join-btn"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
