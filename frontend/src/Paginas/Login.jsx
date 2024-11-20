import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../Css/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <div className="login-container">
                <div className="login-section">
                    <div className="login-header">
                        <span className="active">Inicio de Sesión</span>
                    </div>
                    
                    <div className="login-form">
                        <span className="p-input-icon-left">
                            <i className="pi pi-user" />
                            <InputText
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite número de cédula"
                            />
                        </span>

                        <span className="p-input-icon-left">
                            <i className="pi pi-lock" />
                            <InputText
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                            />
                        </span>

                        <Button label="Iniciar Sesión" className="login-btn" />
                    </div>
                </div>
                <div className="image-section">
                    <img src="/img/login.png" alt="Decorative" className='imagenLogin' />
                </div>
            </div>
    );
};

export default Login;