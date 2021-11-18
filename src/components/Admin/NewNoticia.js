import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import "../styles/NewNoticia.css";

class NewNoticia extends React.Component {
  constructor(props) {
    super(props);
  }
  enviarDatos = async (e) => {
    e.preventDefault();
    const formDataa = new FormData(document.forms.namedItem("formulario"));
    await fetch("http://localhost:8081/noticia/save/1", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        // "Accept-Encoding": "gzip, deflate",
      },
      body: formDataa,
    })
      .then((response) => {
        if (response.status === 200) {
          //  console.log(response.json());
          this.props.history.push("/Admin/noticias");
          return response.json();
        } else {
          this.props.history.push("/Admin/Servicios");
          return response.json();
        }
      })
      .then((error) => console.log(error));
  };
  render() {
    return (
      <div className="container">
        <div className="titl">
          <h2> Registrar Noticia</h2>
        </div>
        <Row>
          <Col xs="1"></Col>

          <Col xs="8">
            <Form
              onSubmit={this.enviarDatos}
              name="formulario"
              className="forms"
            >
              <FormGroup className="form_group">
                <Label id="label">
                  <strong>Titulo</strong>
                </Label>
                <div id="icon_input">
                  <Input
                    type="text"
                    id="nombre"
                    name="titulo"
                    onChange={this.param}
                  ></Input>
                  <i class="fas fa-heading"></i>
                </div>
              </FormGroup>
              <FormGroup className="form_group">
                <Label id="label">
                  <strong>Descripcion</strong>
                </Label>
                <div id="icon_input">
                  <Input
                    type="textarea"
                    id="descripcion"
                    name="descripcion"
                    onChange={this.param}
                  ></Input>
                  <i class="fas fa-audio-description"></i>
                </div>
              </FormGroup>
              <FormGroup className="form_group">
                <Label id="label">
                  <strong>Fecha</strong>
                </Label>
                <Input
                  type="date"
                  id="fechaCreacion"
                  name="fecha"
                  onChange={this.param}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label className="image">
                  <strong>Imagen</strong>
                </Label>
                <Input
                  type="file"
                  id="imagen"
                  accept="image/*"
                  name="files"
                  onChange={this.imagen}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <div className="register">
                  <Button type="submit" color="success">
                    Registrar
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
export default NewNoticia;
