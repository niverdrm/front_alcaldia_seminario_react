import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import "../styles/NewNoticia.css";

class NewCategoria extends React.Component {
  state = {
    tituloC: "",
    titulo: "",
    descripcion: "",
    orden: "",
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  componentDidMount() {
    const categoria = this.props.location.state?.detail;
    if (categoria) {
      const { idCategoria, titulo, descripcion, orden } = categoria;

      this.setState({
        tituloC: "Editar Categoria",
        idCategoria,
        titulo,
        descripcion,
        orden,
      });
    } else {
      this.setState({
        tituloC: "Registrar Categoria",
        categoria: {},
      });
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async guardar(e) {
    e.preventDefault();
    return this.state.tituloC === "Registrar Categoria"
      ? this.enviarDatos()
      : this.actulizar(this.state.idCategoria);
  }

  async enviarDatos() {
    const formData = new FormData(document.forms.namedItem("formulario"));
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    const dataCategoria = {
      descripcion: object.descripcion,
      orden: object.orden,
      titulo: object.titulo,
    };
    let categoria = JSON.stringify(dataCategoria);
    console.log(categoria);
    const res = await fetch("http://localhost:8081/categoria/save", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: categoria,
    });

    const path = res.status === 200 ? "/Admin/categoria" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  }
  async actulizar(id) {
    const formData = new FormData(document.forms.namedItem("formulario"));
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    let categoria = JSON.stringify(object);
    console.log(categoria);
    console.log(this.state.idCategoria);
    const res = await fetch(`http://localhost:8081/categoria/update/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: categoria,
    });

    const path = res.status === 200 ? "/Admin/categoria" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  }

  render() {
    return (
      <div className="container">
        <div className="titl">
          <h2> {this.state.tituloC}</h2>
        </div>
        <Row>
          <Col xs="1"></Col>
          <Col xs="8">
            <Form name="formulario" onSubmit={this.guardar} className="forms">
              <FormGroup className="form_group">
                <Label for="titulo">
                  <strong>Titulo</strong>
                </Label>
                <div id="icon_input">
                  <Input
                    type="text"
                    id="titulo"
                    name="titulo"
                    onChange={this.onChange}
                    value={this.state.titulo}
                  ></Input>
                  <i class="fas fa-heading"></i>
                </div>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="descripcion">
                  <strong>Descripcion</strong>
                </Label>
                <div id="icon_input">
                  <Input
                    type="textarea"
                    id="descripcion"
                    name="descripcion"
                    onChange={this.onChange}
                    value={this.state.descripcion}
                  ></Input>
                  <i class="fas fa-audio-description"></i>
                </div>
              </FormGroup>

              <FormGroup className="form_group">
                <Label for="orden">
                  <strong>Orden</strong>
                </Label>
                <div id="icon_input">
                  <Input
                    type="text"
                    id="orden"
                    name="orden"
                    onChange={this.onChange}
                    value={this.state.orden}
                  ></Input>
                  <i class="fas fa-gavel"></i>
                </div>
              </FormGroup>

              <FormGroup className="form_group">
                <div className="register">
                  <Button color="success">
                    {this.state.tituloC === "Registrar Categoria"
                      ? "Registrar"
                      : "Actualizar"}
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NewCategoria;
