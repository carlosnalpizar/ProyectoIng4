import React, { useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import RegistrarCliente from "../Modals/RegistrarCliente";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

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
          <div className="logo">
            <img
              src="/img/navbar.png"
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">
              Inicio
            </a>
            <a href="#" className="nav-link">
              Opciones de Préstamo
            </a>
            <a href="#" className="nav-link">
              Contáctenos
            </a>
          </div>
          <RegistrarCliente
        visible={isModalVisible}
        onHide={handleCloseModal} // Cierra el modal
        onRegister={handleRegister} // Maneja el registro
            className="join-btn"
      />
        </div>
      </div>

      {/* Modal asociado al botón "Registrarse" */}
     
    </>
  );
};

export default Navbar;
