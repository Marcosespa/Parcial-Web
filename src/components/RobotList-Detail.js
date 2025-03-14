import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import imgBanner from "../images/img.png"; 
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const RobotList = () => {
  const {t,i18n} = useTranslation();
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:3001/robots")
      .then((res) => setRobots(res.data))
  }, []);

  const fetchRobotDetails = async (id) => {
    setLoadingDetails(true);
    try {
      const response = await axios.get(`http://localhost:3001/robots/${id}`);
      setSelectedRobot(response.data);

    }finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">{t("adopta")}</h2>

      <img src={imgBanner}/>

      <h2 className="text-center mb-3">{t("listado_robots")}</h2>

      <div className="row">
        <div className="col-md-8">
          <Table striped bordered hover>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>{t("nombre")}</th>
                <th>{t("modelo")}</th>
                <th>{t("fabricante")}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => fetchRobotDetails(robot.id)} style={{ cursor: "pointer" }}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="col-md-4">
          {loadingDetails && <p className="text-center">Cargando detalles...</p>}
          {selectedRobot && !loadingDetails && (
            <div className="card shadow-lg p-3">
              <h4 className="text-center">{selectedRobot.nombre}</h4>
              <img 
                src={selectedRobot.imagen.replace("github.com", "raw.githubusercontent.com").replace("blob/", "")} 
                alt={selectedRobot.nombre} 
                className="img-fluid rounded"
              />
              <div className="card-body">
                <p><strong>{t("año_fabricacion")}</strong> {selectedRobot.añoFabricacion}</p>
                <p><strong>{t("capacidad_procesamiento")}</strong> {selectedRobot.capacidadProcesamiento}</p>
                <p><strong>Humor:</strong> {selectedRobot.humor}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-center mt-4 text-muted">
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </div>
  );
};

export default RobotList;
