import React, { Component } from "react";
import { Route } from "react-router4-with-layouts";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout1 from "./Layout";
import Layout2 from "./Layout2";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import WhatToDo from "../pages/WhatToDo";
import AsiVamos from "../pages/AsiVamos";
import Noticias from "../pages/Noticias";
import Transparencia from "../pages/Transparencia";
import Mayor from "../pages/Mayor";
import Temas from "../pages/Temas";
import Services from "../pages/Services";
import CrudNoticia from "./Admin/CrudNoticia";
import NewNoticias from "./Admin/NewNoticia";
import CrudEventos from "./Admin/CrudEvento";
import CrudAlcaldia from "./Admin/CrudAlcaldia";
import NewEventos from "./Admin/NewEvento";
import Login from "./Login";
import NewAlcaldia from "./Admin/NewAlcaldia";
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" layout={Layout1} component={Home} />
        <Route exact path="/QueHacer" layout={Layout1} component={WhatToDo} />
        <Route exact path="/AsiVamos" layout={Layout1} component={AsiVamos} />
        <Route exact path="/Noticias" layout={Layout1} component={Noticias} />
        <Route
          exact
          path="/Transparencia"
          layout={Layout1}
          component={Transparencia}
        />
        <Route exact path="/Alcalde" layout={Layout1} component={Mayor} />
        <Route exact path="/Temas" layout={Layout1} component={Temas} />
        <Route exact path="/Servicios" layout={Layout1} component={Services} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Admin" layout={Layout2} component={CrudNoticia} />
        <Route
          exact
          path="/Admin/noticias"
          layout={Layout2}
          component={CrudNoticia}
        />
        <Route
          exact
          path="/Admin/alcaldia"
          layout={Layout2}
          component={CrudAlcaldia}
        />
        <Route
          exact
          path="/Admin/eventos"
          layout={Layout2}
          component={CrudEventos}
        />
        <Route
          exact
          path="/Admin/NewEvento"
          layout={Layout2}
          component={NewEventos}
        />
        <Route
          exact
          path="/Admin/NewAlcaldia"
          layout={Layout2}
          component={NewAlcaldia}
        />
        <Route
          exact
          path="/Admin/NewNoticia"
          layout={Layout2}
          component={NewNoticias}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
