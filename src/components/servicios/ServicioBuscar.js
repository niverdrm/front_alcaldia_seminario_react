import React from 'react';
import $ from "jquery";

class ServicioBuscar extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    filter(e){
        var value = e.target.value;
        // eslint-disable-next-line array-callback-return
        $("#servicios-table tr").filter(function(){
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }

    render() {
        return (
            <div>
                <div className="tramite-buscarserv">
                    <h2>¿QUE ESTAS BUSCANDO?</h2>
                    <div>
                        <input type="text" className="text" onChange={this.filter}></input>
                    </div>
                </div>
                <br></br>
                <table className="tramite-table" id="servicios-table">
                    <thead>
                        <tr><th><h2>Servicios </h2> </th>
                            <th> <h2>Población</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Saca Copia de RUT</td>
                            <td>Comedores comunitarios</td>
                        </tr>
                        <tr>
                            <td>Paga infracciones de transito</td>
                            <td>Actualiza datos del sisben</td>
                        </tr>
                        <tr>
                            <td>Informacion del regimen Subsidiado</td>
                            <td>Apoyos economicos de adultos mayores</td>
                        </tr>
                        <tr>
                            <td>Actualiza el puntaje del sisben</td>
                            <td>Atencion a mujeres gestantes </td>
                        </tr>
                        <tr>
                            <td>Adopta animales de compañia </td>
                            <td>Perdida de capacidad laboral </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ServicioBuscar;