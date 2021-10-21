
import React from 'react';
import { FcNews }  from "react-icons/fc";
/*import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';*/
import {Row, Col, Form, Input, Label, FormGroup, Button, Select} from 'reactstrap';
import '../styles/NewEvento.css';

class NewEvento extends React.Component{

    render(){
        return(
           <div>
               <Row>
               <Col xs="3"></Col>
               <Col xs="6">
                <h2> Registro de Evento</h2>
                <Form>
                    <FormGroup className="form_group">
                <Label id="label"><strong>Nombre</strong></Label>
                <Input type="text" id="nombre" name="nombre"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Descripcion</strong></Label>
                <Input type="textarea" id="descripcion" name="descripcion"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Fecha de Inicio</strong></Label>
                <Input type="date" id="fecha_inicio" name="fecha_inicio"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Fecha de Finalización</strong></Label>
                <Input type="date" id="fecha_fin" name="fecha_fin"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label" className="image"><strong>Imagen</strong></Label>
                <Input type="file" id="imagen" name="imagen"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Link del Evento</strong></Label>
                <Input type="text" id="link" name="link"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label" className="category"><strong>Categoria: </strong></Label>
<select  id="select">
  <option value="EDUCACION">Educación</option>
  <option value="MODA">Moda</option>
  <option value="SEGURIDAD VIAL">Seguridad Vial</option>
  <option value="GASTRONIMIA">Gastronomía</option>
</select>

                </FormGroup>
                <FormGroup className="form_group">
                <Button color="success">Agregar</Button>
                </FormGroup>
               
                </Form>
               </Col>
               </Row>
           </div>
        )}
}
export default NewEvento;