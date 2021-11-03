import React from "react";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/CrudEvento.css";

class CrudEvento extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081/",
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/login");
    }
    this.cargarEvento();
  }

  async cargarEvento() {
    const res = await fetch(`${this.state.url}evento`);
    const data = await res.json();
    this.setState({
      data: data,
    });
    console.log(this.state.data);
  }

  async eliminarEvento(id) {
    const res = await fetch(`${this.state.url}evento/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (res.status === 200) {
      const newData = this.state.data.filter((evento) => evento.id !== id);
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
                <div className="col-12" id="title">
                  <h2 className="text-center">Lista Evento</h2>
                  <a id="create-icon" href="/Admin/NewEvento">
                    <FaPlusCircle />
                  </a>
                </div>
              </div>
              <table className="table pt-4 text-center ">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Tilulo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((evento, i) => (
                    <tr key={evento.idEvento}>
                      <td>{i + 1}</td>
                      <td>{evento.fechaEvento.split("T")[0]}</td>
                      <td>{evento.categoria}</td>
                      <td>{evento.titulo}</td>
                      <td>{evento.descripcion}</td>
                      <td>
                        <span>
                          <FaEdit />
                        </span>
                        <span
                          id="delete-icon"
                          onClick={() => {
                            this.eliminarEvento(evento.id);
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

export default CrudEvento;
