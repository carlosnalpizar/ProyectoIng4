import React from 'react';
import { ArrowRight, Shield, PiggyBank, Phone } from 'lucide-react';
import '../Css/Login.css';
import '../Css/Inicio.css';

const BancoLanding = () => {
  return (
    <div className="in-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tu futuro financiero comienza aquí
          </h1>
          <p className="hero-subtitle">
            Préstamos personalizados con las mejores tasas del mercado
          </p>
          <button className="hero-button">
            Solicitar ahora
            <ArrowRight className="hero-button-icon" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="features-grid">
          <div className="feature-card">
            <Shield className="feature-icon" />
            <h3 className="feature-title">100% Seguro</h3>
            <p className="feature-description">Tus datos siempre protegidos con la mejor seguridad</p>
          </div>
          <div className="feature-card">
            <PiggyBank className="feature-icon" />
            <h3 className="feature-title">Mejores Tasas</h3>
            <p className="feature-description">Tasas competitivas ajustadas a tu perfil</p>
          </div>
          <div className="feature-card">
            <Phone className="feature-icon" />
            <h3 className="feature-title">Atención 24/7</h3>
            <p className="feature-description">Estamos para ayudarte cuando nos necesites</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para comenzar?</h2>
          <p className="cta-description">
            Obtén tu préstamo en 3 simples pasos
          </p>
          <div className="cta-buttons">
            <button className="cta-button-primary">
              Solicitar préstamo
            </button>
            <button className="cta-button-secondary">
              Más información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancoLanding;