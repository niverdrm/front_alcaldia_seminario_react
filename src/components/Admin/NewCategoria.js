import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import "../styles/NewNoticia.css";

class NewCategoria extends React.Component {
  enviarDatos = async (e) => {
    e.preventDefault();
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
  };
  render() {
    return (
      <div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h2> Registrar Categoria</h2>
            <Form name="formulario" onSubmit={this.enviarDatos}>
              <FormGroup className="form_group">
                <Label for="titulo">
                  <strong>Titulo</strong>
                </Label>
                <Input
                  type="text"
                  id="titulo"
                  name="titulo"
                  onChange={this.onChange}
                  //   value={this.state.titulo}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="descripcion">
                  <strong>Descripcion</strong>
                </Label>
                <Input
                  type="textarea"
                  id="descripcion"
                  name="descripcion"
                  onChange={this.onChange}
                  //   value={this.state.descripcion}
                ></Input>
              </FormGroup>

              <FormGroup className="form_group">
                <Label for="orden">
                  <strong>Orden</strong>
                </Label>
                <Input
                  type="text"
                  id="orden"
                  name="orden"
                  onChange={this.onChange}
                  //   value={this.state.fechaEvento}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Button color="success">Registrar</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NewCategoria;
