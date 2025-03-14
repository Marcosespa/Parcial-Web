import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imgBanner from '../images/img.png';  

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login: username,
        password,
      });
      navigate('/robots'); 
    } catch (err) {
      setError('Error.');
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
      
      <img src={imgBanner} alt="Banner de robots" />

      <div className="card p-4 shadow-lg" style={{ width: "500px", marginTop: "-20px" }}>
        <h2 className="text-center mb-3">Adopta un Robot con Robot Lovers!</h2>
        <h4 className="text-center mb-4">Inicio de sesión</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-danger text-center fw-bold mb-3">{error}</div>}

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-50 me-2">Ingresar</button>
            <button type="button" className="btn btn-danger w-50" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>

      <p className="text-center mt-4 text-muted">
        Contact us: +57 231421421 - info@robot-lovers.com - @robot-lovers
      </p>
    </div>
  );
};

export default Login;
