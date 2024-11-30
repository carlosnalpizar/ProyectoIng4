import React from 'react';
import { Users, FileSpreadsheet, CreditCard, Calculator, Handshake } from 'lucide-react';
import { Button } from 'primereact/button';
import '../Css/inicioAnalistas.css'; 

const LoanAnalystDashboard = () => {
  const services = [
    {
      icon: <Users className="icon-style" />,
      title: "Gestión de Clientes",
      description: "Administración integral de datos y relaciones con clientes",
    },
    {
      icon: <FileSpreadsheet className="icon-style" />,
      title: "Formalización de Préstamos",
      description: "Proceso completo de solicitud y aprobación de préstamos",
    },
    {
      icon: <Calculator className="icon-style" />,
      title: "Cálculo y Programación de Pagos",
      description: "Simulación y planificación detallada de cuotas",
    },
    {
      icon: <CreditCard className="icon-style" />,
      title: "Cobro de Pagos",
      description: "Seguimiento y gestión de cobranzas",
    },
    {
      icon: <Handshake className="icon-style" />,
      title: "Gestión de Pagos",
      description: "Control y administración de flujos de pago",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Panel de Analista Financiero</h1>
        <p>Gestión integral de préstamos y servicios financieros</p>
      </div>

      <div className="dashboard-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <Button label="Acceder" className="p-button-success custom-button" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanAnalystDashboard;
