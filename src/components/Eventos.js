import React from "react";

import "./styles/Eventos.css";
import eventos from "../jsons/eventos.json";
import imagen from "../images/eventos/1.jpg";
class Eventos extends React.Component {
  render() {
    return (
      <div className="light-back">
        <div className="container">
          <div className="row">
            <h2 className="section_tittles">Eventos</h2>
          </div>
          <div className="row">
            {eventos.map((evento) => (
              <div key={evento.id} className="col-md-6 col-lg-4 item">
                <div className="image mediaPosition">
                  <img src={imagen} />
                </div>
                <div className="description-img d-flex align-items-center flex-row-reverse">
                  <span className="title titlePosition">{evento.tittle}</span>
                  <div className="date datePosition">
                    <span className="day">{evento.dia}</span>
                    <span className="month">{evento.mes}</span>
                  </div>
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
