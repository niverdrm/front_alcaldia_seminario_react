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
  }

  eliminarNoticia = async (id) => {
    await fetch(`${this.state.url}noticia/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        if (response.status === 200) {
          const nuevo = this.state.data.filter((item) => item.idNoticia !== id);
          this.setState({
            data: nuevo,
          });
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
      <div>
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="table-responsive col-md-8 offset-md-2">
              <div className="row align-items-center">
                <div className="col-12" id="title">
                  <h2>Crear Noticia</h2>
                  <a id="create-icon" href="/Admin/NewNoticia">
                    <FaPlusCircle />
                  </a>
                </div>
                <div className="col"></div>
              </div>
              <table className="table pt-4 text-center ">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((noticia) => (
                    <tr key={noticia.idNoticia}>
                      <td>{noticia.idNoticia}</td>
                      <td>{noticia.descripcion}</td>
                      <td>{noticia.titulo}</td>
                      <td>
                        <Link to="" id="edit-icon">
                          <FaEdit />
                        </Link>
                        <span
                          onClick={() =>
                            this.eliminarNoticia(noticia.idNoticia)
                          }
                          id="delete-icon"
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

export default CrudNoticia;
