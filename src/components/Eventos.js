import React from "react";

import "./styles/Eventos.css";
// import eventos from "../jsons/eventos.json";
import imagen from "../images/eventos/1.jpg";

class Eventos extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081/",
  };
  componentDidMount() {
    this.cargarEvento();
  }

  async cargarEvento() {
    const res = await fetch(`${this.state.url}evento`);
    const data = await res.json();
    this.setState({
      data: data,
    });
    console.log(this.state.data, "evento");
  }

  render() {
    return (
      <div className="dark-back_noticia">
        <div className="container_noticia">
          <div className="section_tittle">
            <h2>Eventos</h2>
          </div>
          <div className="noticia">
            {this.state.data.map((evento) => (
              <div className="card">
                <img className="card-img-top" src={imagen} />
                <div className="card-body">
                  <h4>{evento.titulo}</h4>
                  <p>{evento.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Eventos;
