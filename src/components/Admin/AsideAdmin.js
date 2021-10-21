import React from "react";
import "../styles/AsideAdmin.css";
import { Link } from "react-router-dom";

function AsideAdmin(props) {
  return (
    <React.Fragment>
      <div className="sidebar-heading">
        <h3>Menu</h3>
      </div>
      <div className="list-group list-group-flush">
        <Link to="/Admin/noticias" className="list-group-item">
          Noticias
        </Link>
        <Link to="/Admin/Eventos" className="list-group-item">
          Eventos
        </Link>
        <Link to="/Admin/Servicios" className="list-group-item">
          Servicios
        </Link>
        <Link to="/Admin/Proyectos" className="list-group-item">
          Proyectos
        </Link>
        <Link to="/Admin/alcaldia" className="list-group-item">
          Alcaldia
        </Link>
        <Link
          to="/login"
          className="btn btn-danger"
          onClick={() => localStorage.clear()}
        >
          Cerrar Sesión
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AsideAdmin;
