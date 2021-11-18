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
      <div className="container_n">
        <h3 id="titleN">Eventos</h3>
        <p>
          Estan los eventos registrada por un administrador podra editar y
          eliminar.
        </p>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div>
                <h5 id="card_title">Agregar Eventos</h5>
                <a id="create-icon" href="/Admin/NewEvento">
                  <FaPlusCircle />
                </a>
              </div>
            </div>
          </div>
          {this.state.data.map((evento, i) => (
            <div className="col-4">
              <div className="card">
                <div>
                  <h4 id="number">{i + 1}. </h4>
                  <h5 id="card_title" key={evento.id}>
                    {evento.titulo}
                  </h5>

                  <p className="card-text" id="descrition">
                    {evento.descripcion}
                  </p>
                  <p className="card-text" id="descrition">
                    Categoria: {evento.categoria}
                  </p>
                  <div id="card_footer">
                    <div calssName="card" id="action">
                      <span
                        onClick={() => this.eliminarEvento(evento.id)}
                        id="delete-icon"
                      >
                        <FaTrashAlt />
                      </span>
                      <span id="edit-icon">
                        <Link
                          to={{
                            pathname: "NewEvento",
                            state: { detail: evento },
                          }}
                        >
                          <FaEdit />
                        </Link>
                      </span>
                    </div>
                    {/* <div id="date">{evento.fechaEvento.split("T")[0]}</div> */}
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

export default CrudEvento;
