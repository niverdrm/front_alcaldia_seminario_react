import React from "react";
import "../styles/HeaderAdmin.css";
import { Link } from "react-router-dom";

function HeaderAdmin(props) {
  return (
    <React.Fragment>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        id="headerAdmin"
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h3 id="title">Gestor Alcaldia</h3>
              </li>
            </ul>
            <form class="d-flex">
              <Link
                to="/login"
                className="btn btn-outline-success "
                onClick={() => localStorage.clear()}
              >
                <i class="fas fa-power-off"></i>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default HeaderAdmin;
