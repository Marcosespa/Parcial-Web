import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RobotList = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchRobots = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/robots', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRobots(response.data);
    };
    fetchRobots();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Listado de Robots</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td>
                <Link to={`/robots/${robot.id}`}>{robot.nombre}</Link>
              </td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RobotList;