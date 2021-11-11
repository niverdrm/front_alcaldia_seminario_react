import React from "react";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/CrudAlcaldia.css";
class CrudAlcaldia extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081",
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/login");
    }
    this.cargarAlcaldia();
  }

  async cargarAlcaldia() {
    const res = await fetch(`${this.state.url}/alcaldia`);
    const data = await res.json();
    this.setState({
      data: data,
    });
  }
  async eliminarAlcaldia(id) {
    const res = await fetch(`${this.state.url}/alcaldia/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (res.status === 200) {
      const newData = this.state.data.filter(
        (alcaldia) => alcaldia.idAlcaldia !== id
      );
      this.setState({
        data: newData,
      });
    }
  }

  render() {
    return (
      <div className="container_n">
        <h3 id="titleN">Alcaldías</h3>
        <p>
          Estan son las Alcaldias registrada por un administrador podra editar y
          eliminar.
        </p>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div>
                <h5 id="card_title">Agregar Alcaldia</h5>
                <a id="create-icon" href="/Admin/NewAlcaldia">
                  <FaPlusCircle />
                </a>
              </div>
            </div>
          </div>
          {this.state.data.map((alcaldia, i) => (
            <div className="col-4">
              <div className="card">
                <div>
                  <h4 id="number">{i + 1}. </h4>
                  <h5 id="card_title" key={alcaldia.idAlcaldia}>
                    {alcaldia.nombre}
                  </h5>

                  <p className="card-text" id="descrition">
                    Alcalde: {alcaldia.alcalde}
                  </p>
                  <p className="card-text" id="descrition">
                    Telefono: {alcaldia.telefono}
                  </p>
                  <p className="card-text" id="descrition">
                    Dirección: {alcaldia.direccion}
                  </p>
                  <p className="card-text" id="descrition">
                    Correo: {alcaldia.correo}
                  </p>
                  <p className="card-text" id="descrition">
                    Horario: {alcaldia.horarioAtencion}
                  </p>
                  <div calssName="card" id="action">
                    <span
                      id="delete-icon"
                      onClick={() => {
                        this.eliminarAlcaldia(alcaldia.idAlcaldia);
                      }}
                    >
                      <FaTrashAlt />
                    </span>
                    <span id="edit-icon">
                      <Link
                        to={{
                          pathname: "NewAlcaldia",
                          state: { detail: alcaldia },
                        }}
                      >
                        <FaEdit />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default CrudAlcaldia;
