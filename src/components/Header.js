import React from "react";

import "./styles/Header.css";
import { Link } from "react-router-dom";
import logoAlcaldia from "../images/escudo.png";
import { FaHome } from "react-icons/fa";
class Header extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081/",
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const response = await fetch(`${this.state.url}alcaldia`);
    const data = await response.json();
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light nav-dark">
          <div className="container">
            <span className="alcaldia">
              El sitio oficial de{" "}
              {this.state.data.map((alcaldia) => alcaldia.nombre)}
            </span>
            <a className="navbar-brand" href="#">
              <img
                className="logo-alcaldia "
                src={logoAlcaldia}
                alt=""
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <FaHome></FaHome>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/Servicios" className="nav-link">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/QueHacer" className="nav-link">
                    Que Hacer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/AsiVamos" className="nav-link">
                    Asi vamos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Noticias" className="nav-link">
                    Noticias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Transparencia" className="nav-link">
                    Transparencia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Alcalde" className="nav-link">
                    Alcalde
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Temas" className="nav-link">
                    Temas de Interés
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
