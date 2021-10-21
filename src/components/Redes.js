import React from "react";

import "./styles/Redes.css";
class Redes extends React.Component {
  render() {
    return (
      <div className="light-back">
        <div className="container">
          <div className="row">
            <h2 className="section_tittles">Redes sociales</h2>
          </div>
          <div className="row pb-4">
            <div className="center-frame col-xs-12 offset-xs-3 col-md-6 col-lg-4 offset-lg-2">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlcaldiaCucuta&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="center-frame col-xs-12 col-md-6 col-lg-4">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fingjairoyanez&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redes;
