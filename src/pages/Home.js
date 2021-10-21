import React from "react";

import "../components/styles/Home.css";
import ItemsParticipacion from "../components/ItemsParticipacion";
import Eventos from "../components/Eventos";
import Proyecto from "../components/Proyecto";
import Redes from "../components/Redes";
import Noticia from "../components/Noticias";
import Tramites from "../components/Tramites";
import Banner from "../components/Banner";
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Tramites />
        <Noticia />
        {/* <Redes />
        <Proyecto />
        <Eventos />
        <ItemsParticipacion /> */}
      </div>
    );
  }
}
export default Home;
