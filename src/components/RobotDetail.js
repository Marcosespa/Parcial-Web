import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RobotDetail = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    const fetchRobot = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3001/robots/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRobot(response.data);
    };
    fetchRobot();
  }, [id]);

  if (!robot) return <div className="container mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <h2>{robot.nombre}</h2>
      <div className="card">
        <img src={robot.imagen} className="card-img-top" alt={robot.nombre} />
        <div className="card-body">
          <p><strong>Año de fabricacion:</strong> {robot.añoFabricacion}</p>
          <p><strong>Capacidad de procesamiento:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong>Humor:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;