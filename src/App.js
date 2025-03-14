import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/robots" element={<RobotList />} />
        <Route path="/robots/:id" element={<RobotDetail />} />
      </Routes>
    </Router>
  );
}

export default App;