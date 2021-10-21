import React from 'react';
import AlcaldeJSON from '../../jsons/alcalde.json';

class AlcaldeBiografia extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="alcalde-biografia">
                <h1>Alcalde</h1>
                <div className="alcalde-tarjeta">
                    <div className="alcalde-tarjeta-row">
                        <div className="alcalde-tarjeta-row__info">
                            <h2>{AlcaldeJSON.alcalde.nombre}</h2>
                            <p>{AlcaldeJSON.alcalde.cargo.nombre}</p>
                        </div>
                        <div className="alcalde-tarjeta-row__image">
                            <img src={AlcaldeJSON.alcalde.foto} />
                        </div>
                    </div>
                    <div className="alcalde-tarjeta-row">
                        <label>Fecha Nacimiento <span>{AlcaldeJSON.alcalde.nacimiento.fecha}</span></label>
                        <label>Lugar <span>{AlcaldeJSON.alcalde.nacimiento.lugar}</span></label>
                    </div>
                </div>
                <div className="alcalde-lema">
                    <p><span>"</span>{AlcaldeJSON.alcalde.lema}<span>"</span></p>
                </div>
                <div className="alcalde-descripcion">
                    <h2>Biografia</h2>
                    <p>{AlcaldeJSON.alcalde.breve}</p>
                    <p>{AlcaldeJSON.alcalde.descripcion}</p>
                    <h2>Eleccion</h2>
                    <p>{AlcaldeJSON.alcalde.eleccion}</p>
                </div>
            </div>
        );
    }
}

export default AlcaldeBiografia;