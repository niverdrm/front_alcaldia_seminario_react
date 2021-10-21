import React from "react";

import { FaCar, FaHome, FaCalculator } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Tramites.css";
class Tramites extends React.Component {
  render() {
    return (
      <div className="light-back">
        <div className="container">
          <div className="row">
            <h2 className="section_tittles">Trámites y Servicios</h2>
          </div>
          <div className="row">
            <div id="service-list">
              <ul className="nav justify-content-center">
                <li className="nav-item text-center">
                  <span className="mb-2 service-icon flex justify-center">
                    <FaCalculator color="#215A9A" fontSize="4em"></FaCalculator>
                  </span>
                  <Link to="/Servicios" className="nav-link">
                    Impuestos
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <span className="mb-2 service-icon flex justify-center">
                    <FaHome color="#215A9A" fontSize="4em"></FaHome>
                  </span>
                  <Link to="/Servicios" className="nav-link">
                    Catastro
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <span className="mb-2 service-icon flex justify-center">
                    <FaCar color="#215A9A" fontSize="4em"></FaCar>
                  </span>
                  <Link to="/Servicios" className="nav-link">
                    Movilidad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="button_view_more">
              <Link to="/Servicios" className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tramites;
