import React from "react";
import "../styles/AsideAdmin.css";
import { Link } from "react-router-dom";

function AsideAdmin(props) {
  return (
    <React.Fragment>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/Admin/noticias" className="list-group-item">
              <h3>
                <i className="fas fa-newspaper"> Noticias</i>
              </h3>
            </Link>

            <Link to="/Admin/Eventos" className="list-group-item">
              <h3>
                <i className="fas fa-bullhorn"> Eventos</i>
              </h3>
            </Link>
            <Link to="/Admin/Servicios" className="list-group-item">
              <h3>
                <i className="fas fa-hand-holding-medical"> Servicios</i>
              </h3>
            </Link>
            <Link to="/Admin/Proyectos" className="list-group-item">
              <h3>
                <i className="fas fa-project-diagram"> Proyectos</i>
              </h3>
            </Link>
            <Link to="/Admin/alcaldia" className="list-group-item">
              <h3>
                <i className="fas fa-city"> Alcaldia</i>
              </h3>
            </Link>
            <Link to="/Admin/categoria" className="list-group-item">
              <h3>
                <i className="fas fa-list-alt"> Categoria</i>
              </h3>
            </Link>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default AsideAdmin;
