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
      <div>
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="table-responsive col-md-8 offset-md-2">
              <div className="row">
                <div className="col-12 " id="title">
                  <h2 className="text-center">Lista de Alcaldías</h2>
                  <a id="create-icon" href="/Admin/NewAlcaldia">
                    <FaPlusCircle />
                  </a>
                </div>
              </div>
              <table className="table pt-4 text-center ">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Alcalde</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">correo</th>
                    <th scope="col">Horario</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((alcaldia, i) => (
                    <tr key={alcaldia.idAlcaldia}>
                      <td>{i + 1}</td>
                      <td>{alcaldia.nombre}</td>
                      <td>{alcaldia.alcalde}</td>
                      <td>{alcaldia.telefono}</td>
                      <td>{alcaldia.direccion}</td>
                      <td>{alcaldia.correo}</td>
                      <td>{alcaldia.horarioAtencion}</td>
                      <td>
                        {/* <span
                          id="edit-icon"
                          onClick={() => this.editarAlcaldia(alcaldia)}
                        >
                          <FaEdit />
                        </span> */}

                        <Link
                          to={{
                            pathname: "NewAlcaldia",
                            state: { detail: alcaldia },
                          }}
                        >
                          <FaEdit />
                        </Link>
                        <span
                          id="delete-icon"
                          onClick={() => {
                            this.eliminarAlcaldia(alcaldia.idAlcaldia);
                          }}
                        >
                          <FaTrashAlt />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CrudAlcaldia;
