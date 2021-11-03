import React from "react";
import "../styles/HeaderAdmin.css";
import { Link } from "react-router-dom";

function HeaderAdmin(props) {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light border-bottom"
        id="headerAdmin"
      >
        <div className="container-fluid">
          <h3>Gestor Alcaldia</h3>
        </div>
        <Link to="/login" className="btn" onClick={() => localStorage.clear()}>
          <i class="fas fa-power-off"></i>
        </Link>
      </nav>
    </React.Fragment>
  );
}

export default HeaderAdmin;
