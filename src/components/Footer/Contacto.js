import React from "react";

import logo from "../../images/escudo.png";
import { FaRegEnvelope, FaClock, FaInfoCircle, FaPhone } from "react-icons/fa";
import "../styles/Contacto.css";

class Contacto extends React.Component {
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
      <footer className=" clear-fix">
        <div className="containerContact">
          <div className="row">
            <h2 className="title-section">Contáctenos</h2>
            <div className="contact col-md-12" id="contacto">
              <div className="row">
                <div className="info-container col-md-3" id="info">
                  <div className="info place">
                    <span className="icon">
                      <FaInfoCircle color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <span>Dirección: </span>
                    {this.state.data.map((alcalde) => alcalde.direccion)}
                  </div>
                  <div className="info clock">
                    <span className="icon">
                      <FaClock color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <span>Horario atención: </span>
                    {this.state.data.map((alcalde) => alcalde.horarioAtencion)}
                  </div>
                </div>
                <div className="info-container col-md-3" id="info">
                  <div className="info directory">
                    <span className="icon">
                      <FaInfoCircle color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <a>Directorio dependencias</a>
                  </div>
                  <div className="info directory">
                    <span className="icon">
                      <FaInfoCircle color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <a>
                      <span>NIT: </span>00000000{" "}
                    </a>
                  </div>
                </div>
                <div className="info-container2 col-md-3 " id="info">
                  <div className="info phone">
                    <span className="icon">
                      <FaPhone color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <span>Linea Nacional: </span>
                    {this.state.data.map((alcalde) => alcalde.telefono)}
                  </div>
                  <div className="info phone">
                    <span className="icon">
                      <FaPhone color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <span>Lineas Locales: </span>{" "}
                    {this.state.data.map((alcalde) => alcalde.telefono)}
                  </div>
                </div>
                <div className="info-container2 col-md-3 " id="info">
                  <div className="info email">
                    <span className="icon">
                      <FaRegEnvelope color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <span>Email: </span>
                    {/* {this.state.data.map((alcalde) => alcalde.correo)} */}
                    alcucuta@gmail.com
                  </div>

                  <div className="info email">
                    <span className="icon">
                      <FaRegEnvelope color="#66A9F4" fontSize="1.250em" />
                    </span>
                    <a>
                      <span>Notificaciones Judiciales:</span>
                      notifijucial@example.gov.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Contacto;
