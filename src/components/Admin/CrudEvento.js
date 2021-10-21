import React from "react";
import eventos from "../../jsons/Eventos_Semana.json";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import "../styles/CrudEvento.css";

class CrudEvento extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="table-responsive col-md-8 offset-md-2">
              <div className="row">
                <div className="col">
                  <h2>Añadir Nuevo Evento</h2>
                </div>
                <div className="col">
                  <a id="create-icon" href="/Admin/NewEvento">
                    <FaPlusCircle />
                  </a>
                </div>
              </div>
              <table className="table pt-4 text-center ">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {eventos.map((evento) => (
                    <tr key={evento.id}>
                      <td>{evento.id}</td>
                      <td>
                        {evento.fecha_inicio}-{evento.fecha_finaliza}
                      </td>
                      <td>{evento.categoria}</td>
                      <td>{evento.title}</td>
                      <td>{evento.descripcion}</td>
                      <td>
                        <span id="edit-icon">
                          <FaEdit />
                        </span>
                        <span id="delete-icon">
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

export default CrudEvento;
