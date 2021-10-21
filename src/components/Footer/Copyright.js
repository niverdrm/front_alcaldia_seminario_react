import React from "react";

import "../styles/Copyright.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
class Copyright extends React.Component {
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
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 brand">
              <span>
                {this.state.data.map((alcaldia) => alcaldia.nombre)} - Nit:
                00000000{" "}
              </span>
              <Link to="/">
                Políticas de seguridad de la información y protección de datos
                personales
              </Link>
              <span>Todos los Derechos Reservados © 2021</span>
            </div>

            <div className="col-md-6 socialnetworks bottom">
              <ul>
                <li>
                  <span>Síguenos en:</span>
                </li>
                <li className="facebook">
                  <a
                    href="https://es-la.facebook.com/AlcaldiaCucuta/"
                    target="_blank"
                    className="flex-all-center"
                  >
                    <span className="icon icon33 fa">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li className="twitter">
                  <a
                    href="https://twitter.com/AlcaldiaCucuta"
                    target="_blank"
                    className="flex-all-center"
                  >
                    <span className="icon icon33 fa">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li className="youTube">
                  <a
                    href="https://www.youtube.com/channel/UCF6K7KJees9LNllhXgI7tzA"
                    target="_blank"
                    className="flex-all-center"
                  >
                    <span className="icon icon33 fa">
                      <FaYoutube />
                    </span>
                  </a>
                </li>
                <li className="instagram">
                  <a
                    href="https://www.instagram.com/alcaldiacucuta/"
                    target="_blank"
                    className="flex-all-center"
                  >
                    <span className="icon icon33 fa">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Copyright;
