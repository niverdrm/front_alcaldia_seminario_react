import React from "react";
import "../styles/AsideAdmin.css";
import { Link } from "react-router-dom";

function AsideAdmin(props) {
  return (
    <React.Fragment>
      <div className="sidebar-heading">
        <h3 className="text-center">Menu</h3>
      </div>
      <div className="list-group list-group-flush">
        <Link to="/Admin/noticias" className="list-group-item">
          <h3>
            <i className="fas fa-newspaper"></i>
          </h3>
          Noticias
        </Link>
        <Link to="/Admin/Eventos" className="list-group-item">
          <h3>
            <i class="fas fa-bullhorn"></i>
          </h3>
          Eventos
        </Link>
        <Link to="/Admin/Servicios" className="list-group-item">
          <h3>
            <i class="fas fa-hand-holding-medical"></i>
          </h3>
          Servicios
        </Link>
        <Link to="/Admin/Proyectos" className="list-group-item">
          <h3>
            <i class="fas fa-project-diagram"></i>
          </h3>
          Proyectos
        </Link>
        <Link to="/Admin/alcaldia" className="list-group-item">
          <h3>
            <i class="fas fa-city"></i>
          </h3>
          Alcaldia
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AsideAdmin;
