import React from "react";
/*import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';*/
import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import "../styles/NewEvento.css";

class NewEvento extends React.Component {
  state = {
    data: [],
    tituloCl: "",
    titulo: "",
    descripcion: "",
    categoria: "",
    fechaEvento: "",
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/login");
    }
    this.cargarAlcaldia();
    const evento = this.props.location.state?.detail;
    if (evento) {
      const { id, titulo, descripcion, categoria, fechaEvento } = evento;
      this.setState({
        tituloCl: "Actualizar Evento",
        id,
        titulo,
        descripcion,
        categoria,
        fechaEvento,
      });
    } else {
      this.setState({
        tituloCl: "Registrar Evento",
        evento: {},
      });
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async cargarAlcaldia() {
    const res = await fetch("http://localhost:8081/alcaldia");
    const data = await res.json();
    this.setState({
      data: data,
    });
  }
  async guardar(e) {
    e.preventDefault();
    return this.state.tituloCl === "Registrar Evento"
      ? this.enviarDatos()
      : this.actulizar(this.state.id);
  }

  enviarDatos = async (e) => {
    const formData = new FormData(document.forms.namedItem("formulario"));
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    const dataEvento = {
      titulo: object.titulo,
      descripcion: object.descripcion,
      categoria: object.categoria,
      fechaEvento: object.fechaEvento,
      alcaldia: {
        idAlcaldia: object.alcaldia,
      },
    };
    let evento = JSON.stringify(dataEvento);
    const res = await fetch("http://localhost:8081/evento/save", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: evento,
    });

    const path = res.status === 200 ? "/Admin/Eventos" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  };

  async actulizar(id) {
    const formData = new FormData(document.forms.namedItem("formulario"));
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    const dataEvento = {
      titulo: object.titulo,
      descripcion: object.descripcion,
      categoria: object.categoria,
      fechaEvento: object.fechaEvento,
      alcaldia: {
        idAlcaldia: object.alcaldia,
      },
    };
    let evento = JSON.stringify(dataEvento);
    const res = await fetch(`http://localhost:8081/evento/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: evento,
    });

    const path = res.status === 200 ? "/Admin/Evento" : "/Admin/Servicios";
    this.props.history.push(path);
    return res.json();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h2> {this.state.tituloCl}</h2>
            <Form name="formulario" onSubmit={this.guardar}>
              <FormGroup className="form_group">
                <Label for="titulo">
                  <strong>Titulo</strong>
                </Label>
                <Input
                  type="text"
                  id="titulo"
                  name="titulo"
                  onChange={this.onChange}
                  value={this.state.titulo}
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
                  value={this.state.descripcion}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Label for="categoria" className="category">
                  <strong>Categoria: </strong>
                </Label>
                <select
                  id="catetoria"
                  name="categoria"
                  onChange={this.onChange}
                  value={this.state.categoria}
                >
                  <option value="EDUCACION">Educación</option>
                  <option value="MODA">Moda</option>
                  <option value="SEGURIDAD VIAL">Seguridad Vial</option>
                  <option value="GASTRONIMIA">Gastronomía</option>
                  <option value="Recreacion">Recreacion</option>
                  <option value="Deporte">Deporte</option>
                </select>
              </FormGroup>

              <FormGroup className="form_group">
                <Label for="alcaldia" className="category">
                  <strong>Alcaldia: </strong>
                </Label>
                <select id="alcaldia" name="alcaldia">
                  {this.state.data.map((alcaldia) => (
                    <option
                      key={alcaldia.idAlcaldia}
                      value={alcaldia.idAlcaldia}
                    >
                      {alcaldia.nombre}
                    </option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup className="form_group">
                <Label for="fechaEvento">
                  <strong>Fecha</strong>
                </Label>
                <Input
                  type="date"
                  id="fechaEvento"
                  name="fechaEvento"
                  onChange={this.onChange}
                  value={this.state.fechaEvento}
                ></Input>
              </FormGroup>
              <FormGroup className="form_group">
                <Button color="success">
                  {this.state.tituloCl === "Registrar Evento"
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
export default NewEvento;
