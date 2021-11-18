import React from "react";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/CrudNoticia.css";

class CrudNoticia extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081/",
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/login");
    }
    this.fetchNews();
    console.log(this.fetchNews());
  }

  eliminarNoticia = async (id) => {
    await fetch(`${this.state.url}noticia/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        if (response.status === 200) {
          // const nuevo = this.state.data.filter((item) => item.idNoticia !== id);
          // this.setState({
          //   data: nuevo,
          // });
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((error) => console.log(error));
  };

  fetchNews = async () => {
    const response = await fetch(`${this.state.url}noticia`);
    const data = await response.json();
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div className="container_n">
        <h3 id="titleN">NOTICIAS</h3>
        <p>
          Estan son las noticias registrada por un administrador podra editar y
          eliminar.
        </p>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div>
                <h5 id="card_title">Agregar Noticia</h5>
                <a id="create-icon" href="/Admin/NewNoticia">
                  <FaPlusCircle />
                </a>
              </div>
            </div>
          </div>
          {this.state.data.map((noticia, i) => (
            <div className="col-4">
              <div className="card">
                <div>
                  <h4 id="number">{i + 1}. </h4>
                  <h5 id="card_title" key={noticia.idNoticia}>
                    {noticia.titulo}{" "}
                  </h5>

                  <p className="card-text" id="descrition">
                    {noticia.descripcion}
                  </p>
                  <div calssName="card" id="action">
                    <span
                      // onClick={() => this.eliminarNoticia(noticia.idNoticia)}
                      id="delete-icon"
                    >
                      <FaTrashAlt />
                    </span>
                    <span id="edit-icon">
                      <FaEdit />
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

export default CrudNoticia;
