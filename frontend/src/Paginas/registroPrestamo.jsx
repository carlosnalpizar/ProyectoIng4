import React, { useState, useEffect, useRef } from 'react';  // Importación corregida
import '../Css/registroPrestamo.css';
import { insertarPrestamo } from "../api/RegistrarPrestamo.api";
import axios from 'axios';
import { Toast } from 'primereact/toast';

const BankLoanForm = () => {
  const [formData, setFormData] = useState({
    monto: '',
    plazoMeses: '',
    fechaInicio: '',
    fechaVencimiento: '',
<<<<<<< HEAD
    numeroPrestamo: '',
    tasaInteresMoratoria: 10,
    diaPago: '', 
    clientesPersonaCedula: '',
    IdClientes: '', 
    estadoPrestamo: 2 
  });

  const [errors, setErrors] = useState({});
  const toast = useRef(null);  
=======
    numeroPrestamo: '', // Inicialmente vacío
    tasaInteresMoratoria: 10,
    diaPago: '', // Campo numérico para día de pago
    clientesPersonaCedula: '',
    IdClientes: '', // Campo para el ID del cliente
    estadoPrestamo: 2  // Establecer estado predeterminado a 2
  });

  const [errors, setErrors] = useState({});
  const toast = useRef(null);  // Crear una referencia para el Toast
>>>>>>> origin/Ana_test

  useEffect(() => {
    const fetchLastLoanNumber = async () => {
      try {
        const response = await axios.get("http://localhost:3333/prestamos/obtenerultimo");
        console.log("Respuesta de la API:", response.data);
<<<<<<< HEAD
  
        const ultimoPrestamo = response.data.ultimoPrestamo || "PRE-0";  
  
        const numeroPrestamo = parseInt(ultimoPrestamo.split("PRE-")[1], 10);
  
        const nuevoNumeroPrestamo = `PRE-${numeroPrestamo + 1}`;
  
=======

        const ultimoPrestamo = response.data.ultimoPrestamo || 0;
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        const nuevoNumeroPrestamo = ultimoPrestamo + randomNumber;

>>>>>>> origin/Ana_test
        setFormData(prevState => ({
          ...prevState,
          numeroPrestamo: nuevoNumeroPrestamo
        }));
      } catch (error) {
        console.error("Error al obtener el último número de préstamo:", error);
      }
    };
<<<<<<< HEAD
  
    fetchLastLoanNumber();
  }, []);
  
  
=======
    fetchLastLoanNumber();
  }, []);
>>>>>>> origin/Ana_test

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'plazoMeses' || name === 'fechaInicio') {
      calculateFechaVencimiento(value, name);
    }
  };

  const calculateFechaVencimiento = (value, field) => {
    let fechaInicio = formData.fechaInicio ? new Date(formData.fechaInicio) : null;
    let plazoMeses = formData.plazoMeses;

    if (field === 'plazoMeses') plazoMeses = value;
    if (field === 'fechaInicio') fechaInicio = value ? new Date(value) : null;

    if (fechaInicio && !isNaN(fechaInicio) && plazoMeses) {
      const fechaVencimiento = new Date(fechaInicio);
      fechaVencimiento.setMonth(fechaVencimiento.getMonth() + parseInt(plazoMeses, 10));

      setFormData((prevState) => ({
        ...prevState,
        fechaVencimiento: fechaVencimiento.toISOString().split('T')[0]
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'fechaVencimiento') {
        newErrors[key] = 'Este campo es requerido';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const prestamoNuevo = {
          ...formData,
          estadoPrestamo: 2,
        };
        const resultado = await insertarPrestamo(prestamoNuevo);

        console.log("Préstamo insertado exitosamente:", resultado);
        toast.current.show({ severity: 'success', summary: 'Exitoso', detail: 'Préstamo procesado de manera exitosa', life: 3000 });  // Mostrar Toast de éxito

      } catch (error) {
        console.error("Error al insertar el préstamo:", error);
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al registrar el préstamo', life: 3000 });  // Mostrar Toast de error
      }
    }
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="containerPrestamos">
        <div className="loan-form-card">
          <h2 className="form-title text-3xl">Solicitud de Préstamo</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Número de préstamo */}
              <div>
                <label htmlFor="numeroPrestamo" className="form-label">Número de Préstamo</label>
                <input
                  type="text"
                  id="numeroPrestamo"
                  name="numeroPrestamo"
                  value={formData.numeroPrestamo}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Número de préstamo generado"
                  disabled
                />
              </div>

              {/* Monto */}
              <div>
                <label htmlFor="monto" className="form-label">Monto del Préstamo</label>
                <input
                  type="number"
                  id="monto"
                  name="monto"
                  value={formData.monto}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ingrese monto"
                />
                {errors.monto && <p className="error-message">{errors.monto}</p>}
              </div>

              {/* Plazo Meses */}
              <div>
                <label htmlFor="plazoMeses" className="form-label">Plazo (Meses)</label>
                <select
                  id="plazoMeses"
                  name="plazoMeses"
                  value={formData.plazoMeses}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Seleccione plazo</option>
                  {[6, 12, 18, 24, 36, 48, 60].map((mes) => (
                    <option key={mes} value={mes}>{mes} meses</option>
                  ))}
                </select>
                {errors.plazoMeses && <p className="error-message">{errors.plazoMeses}</p>}
              </div>

              {/* Fecha de inicio */}
              <div>
                <label htmlFor="fechaInicio" className="form-label">Fecha de inicio</label>
                <input
                  type="date"
                  id="fechaInicio"
                  name="fechaInicio"
                  value={formData.fechaInicio}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.fechaInicio && <p className="error-message">{errors.fechaInicio}</p>}
              </div>

              {/* Fecha de vencimiento */}
              <div>
                <label htmlFor="fechaVencimiento" className="form-label">Fecha de vencimiento</label>
                <input
                  type="date"
                  id="fechaVencimiento"
                  name="fechaVencimiento"
                  value={formData.fechaVencimiento}
                  onChange={handleChange}
                  className="form-input"
                  disabled
                />
              </div>

              {/* Día de pago */}
              <div>
                <label htmlFor="diaPago" className="form-label">Día de Pago</label>
                <input
                  type="number"
                  id="diaPago"
                  name="diaPago"
                  value={formData.diaPago}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ingrese día de pago"
                  min="1"
                  max="31"
                />
                {errors.diaPago && <p className="error-message">{errors.diaPago}</p>}
              </div>

              {/* Cédula del Cliente */}
              <div>
                <label htmlFor="clientesPersonaCedula" className="form-label">Cédula del Cliente</label>
                <input
                  type="text"
                  id="clientesPersonaCedula"
                  name="clientesPersonaCedula"
                  value={formData.clientesPersonaCedula}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Cédula del cliente"
                />
                {errors.clientesPersonaCedula && <p className="error-message">{errors.clientesPersonaCedula}</p>}
              </div>

              {/* ID Cliente */}
              <div>
                <label htmlFor="IdClientes" className="form-label">ID del Cliente</label>
                <input
                  type="text"
                  id="IdClientes"
                  name="IdClientes"
                  value={formData.IdClientes}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="ID del cliente"
                />
                {errors.IdClientes && <p className="error-message">{errors.IdClientes}</p>}
              </div>
            </div>

            {/* Botón de envío */}
            <div className="submit-button-container">
              <button
                type="submit"
                className="submit-button"
              >
                Registrar Préstamo
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default BankLoanForm;
