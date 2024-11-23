import React, { useState, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Toast } from 'primereact/toast'; // Importa el componente Toast
import '../Css/registroAnalista.css';
import { insertarAnalista } from "../api/RegistrarAnalista.api";

const RegistroForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    personaCedula: '',
    telefono: '',
    correoElectronico: '',
    contrasena: ''
  });

  const toast = useRef(null); // Crea una referencia para el Toast

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);

    try {
      const result = await insertarAnalista(formData);
      if (result.success) {
        // Si el analista se creó exitosamente, muestra un toast de éxito
        toast.current.show({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Analista creado exitosamente',
          life: 3000 // Duración en ms
        });
      } else {
        // Si hubo un error, muestra un toast de error
        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al crear el analista: ' + result.message,
          life: 3000
        });
      }
    } catch (error) {
      // Si ocurre un error en la solicitud, muestra un toast de error
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al enviar los datos: ' + error.message,
        life: 3000
      });
    }
  };

  return (
    <div className="registro-container">
      <Toast ref={toast} /> {/* Coloca el Toast aquí */}

      <div className="registro-main">
        <div className="registro-form-container">
          <h1 className="registro-title">Crear una cuenta</h1>
          <p className="registro-subtitle">Complete sus datos para comenzar</p>

          <form onSubmit={handleSubmit} className="registro-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="primerApellido">Primer Apellido *</label>
                <input
                  type="text"
                  id="primerApellido"
                  name="primerApellido"
                  value={formData.primerApellido}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ingrese su primer apellido"
                />
              </div>

              <div className="form-group">
                <label htmlFor="segundoApellido">Segundo Apellido</label>
                <input
                  type="text"
                  id="segundoApellido"
                  name="segundoApellido"
                  value={formData.segundoApellido}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ingrese su segundo apellido"
                />
              </div>

              <div className="form-group">
                <label htmlFor="personaCedula">Cédula *</label>
                <input
                  type="text"
                  id="personaCedula"
                  name="personaCedula"
                  value={formData.personaCedula}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ingrese su número de cédula"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ingrese su número de teléfono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="correoElectronico">Correo Electrónico *</label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="form-group password-group">
                <label htmlFor="contrasena">Contraseña *</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="contrasena"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Ingrese su contraseña"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="icon" /> : <Eye className="icon" />}
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Crear cuenta
            </button>

            <p className="form-footer">
              * Campos obligatorios
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroForm;
