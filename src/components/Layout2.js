import React from "react";

import Aside from "./Admin/AsideAdmin";
import Header from "./Admin/HeaderAdmin";
import "./styles/Layout2.css";
function Layout2(props) {
  return (
    <React.Fragment>
      <div className="d-flex" id="wrapper">
        <div className="border-right" id="sidebar-wrapper">
          <Aside />
        </div>
        <div id="page-content-wrapper">
          <Header />
          <div className="container-fluid">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout2;
