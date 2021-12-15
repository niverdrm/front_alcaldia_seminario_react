import React from "react";

import "./styles/Noticia.css";
class Noticias extends React.Component {
  state = {
    data: [],
    url: "http://localhost:8081/",
  };

  componentDidMount() {
    this.fetchNews();
    console.log();
  }

  fetchNews = async () => {
    const response = await fetch(`${this.state.url}noticia`);
    const data = await response.json();
    this.setState({
      data: data,
    });
    console.log(this.state.data);
  };
  render() {
    return (
      <div className="dark-back_noticia">
        <div className="container_noticia">
          <div className="section_tittle">
            <h2>Noticias</h2>
          </div>
          <div className="noticia">
            {this.state.data.map((noticia) => (
              <div class="card" key={noticia.idNoticia}>
                <img
                  src={`${this.state.url}uploads/${noticia.fotos[0].descripcion}`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h4>{noticia.titulo}</h4>
                  <p class="card-text">{noticia.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Noticias;
