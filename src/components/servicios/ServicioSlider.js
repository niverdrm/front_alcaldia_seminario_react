import React from "react";
import ServicioJSON from "../../jsons/servicio.json";

class ServicioSlider extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  itemsGroup(array) {
    let i = [];
    for (const [index, value] of array.entries()) {
      i.push(
        <li>
          <h2>
            <a href="#">{value.titulo}</a>
          </h2>
          <div className="article-info box">
            <p className="f-right">
              <a href="#" className="comment">
                Comments (15)
              </a>
            </p>
            <p className="f-left">
              October 27, 2011 | Posted by <a href="#">John Doe</a> | Filed
              under <a href="#">templates</a>,<a href="#">webdesign</a>,{" "}
              <a href="#">internet</a>
            </p>
          </div>
          <h4>Descripción:</h4>
          <p>{value.descripcion}</p>
          <p>
            <img
              src={`https://picsum.photos/200/300?random=${index}`}
              alt=""
              className="f-left"
            />
            <div className="diplay-flex-card">
              <div className="diplay-flex-card-center">
                <h4>Tipo Tramite:</h4>
                <span>{value.gestion}</span>
              </div>
              <div className="diplay-flex-card-center">
                <h4>¿Cuánto tarda el proceso?</h4>
                <span>{value.proceso}</span>
              </div>
              <div className="diplay-flex-card-center">
                <h4>¿Cual es el costo?</h4>
                <span>{value.costo}</span>
              </div>
            </div>
          </p>
          <p>
            <a href={value.ir}>Donde ir</a>
          </p>
        </li>
      );
    }
    return i;
  }

  render() {
    return (
      <div id="content">
        <ul className="articles box">
          {this.itemsGroup(ServicioJSON.tramites)}
        </ul>
        <div className="pagination box">
          <p className="f-right">
            {" "}
            <a href="#" className="current">
              1
            </a>{" "}
            <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
            <a href="#">5</a> <a href="#">6</a> <a href="#">7</a>{" "}
            <a href="#">Next &raquo;</a>{" "}
          </p>
          <p className="f-left">Page 1 of 13</p>
        </div>
      </div>
    );
  }
}

export default ServicioSlider;
