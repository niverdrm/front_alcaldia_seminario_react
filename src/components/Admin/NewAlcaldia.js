import React from "react";
/*import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';*/
import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import "../styles/NewAlcaldia.css";

class NewAlcaldia extends React.Component {
  state = {
    titulo: "",
    nombre: "",
    alcalde: "",
    telefono: "",
    direccion: "",
    correo: "",
    horarioAtencion: "",
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  componentDidMount() {
    const alcaldia = this.props.location.state?.detail;
    if (alcaldia) {
      const {
        idAlcaldia,
        nombre,
        alcalde,
        telefono,
        direccion,
        correo,
        horarioAtencion,
      } = alcaldia;

      this.setState({
        titulo: "Editar Alcaldia",
        idAlcaldia,
        nombre,
        alcalde,
        telefono,
        direccion,
        correo,
        horarioAtencion,
      });
    } else {
      this.setState({
        titulo: "Registrar Alcaldia",
        alcaldia: {},
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
    return this.state.titulo === "Registrar Alcaldia"
      ? this.crear()
      : this.actulizar(this.state.idAlcaldia);
  }

  async crear() {
    const formData = new FormData(document.forms.namedItem("formulario"));
    const res = await fetch("http://localhost:8081/alcaldia/save", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        // "Accept-Encoding": "gzip, deflate",
      },
      body: formData,
    });
    const path = res.status === 200 ? "/Admin/alcaldia" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  }

  async actulizar(id) {
    const formData = new FormData(document.forms.namedItem("formulario"));
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    let datos = JSON.stringify(object);
    const res = await fetch(`http://localhost:8081/alcaldia/update/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: datos,
    });

    const path = res.status === 200 ? "/Admin/alcaldia" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h2 className="text-center"> {this.state.titulo}</h2>
            <Form id="formulario" onSubmit={this.guardar}>
              <FormGroup className="form_group">
                <Label for="nombre">
                  <strong>Nombre</strong>
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={this.onChange}
                  value={this.state.nombre}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="alcalde">
                  <strong>Alcalde</strong>
                </Label>
                <Input
                  type="text"
                  id="alcalde"
                  name="alcalde"
                  onChange={this.onChange}
                  value={this.state.alcalde}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="direccion">
                  <strong>Dirección</strong>
                </Label>
                <Input
                  type="text"
                  id="direccion"
                  name="direccion"
                  onChange={this.onChange}
                  value={this.state.direccion}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="telefono">
                  <strong>Telefono</strong>
                </Label>
                <Input
                  type="text"
                  id="telefono"
                  name="telefono"
                  onChange={this.onChange}
                  value={this.state.telefono}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="correo">
                  <strong>Correo</strong>
                </Label>
                <Input
                  type="text"
                  id="correo"
                  name="correo"
                  onChange={this.onChange}
                  value={this.state.correo}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="horarioAtencion">
                  <strong>Horario</strong>
                </Label>
                <Input
                  type="text"
                  id="horarioAtencion"
                  name="horarioAtencion"
                  onChange={this.onChange}
                  value={this.state.horarioAtencion}
                ></Input>
              </FormGroup>
              {this.state.titulo === "Registrar Alcaldia" && (
                <FormGroup className="form_group">
                  <Label for="imagen">
                    <strong>Imagen</strong>
                  </Label>
                  <Input
                    type="file"
                    id="imagen"
                    accept="image/*"
                    name="files"
                  ></Input>
                </FormGroup>
              )}
              <FormGroup className="form_group">
                <Button color="success">
                  {this.state.titulo === "Registrar Alcaldia"
                    ? "Registrar"
                    : "Actualizar"}
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NewAlcaldia;
