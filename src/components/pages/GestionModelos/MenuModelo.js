import React from 'react';
import { Link } from 'react-router-dom';
import './MenuModelo.css';

function MenuModelo() {
  return (
    <div className="menu-container">
      <Link to="/gestionModelos/CrearModelo" className="menu-button">
        Agregar Modelo
      </Link>
      <Link to="/gestionModelos/ListarModelo" className="menu-button">
        Ver Modelos
      </Link>
    </div>
  );
}

export default MenuModelo;
