import React from 'react';
import AlcaldeJSON from '../../jsons/alcalde.json';
import '../styles/TarjetaAlcalde.scss';

class AlcaldeSecretaria extends React.Component {
    constructor(props) {
        super(props);
    }

    itemsGroup(array) {
        let i = [];
        array.map((value, index) => {
            i.push(
                (
                    <div className={`blog-card ${index % 2 == 0 ? ' ' : ' alt'}`} key={index}>
                        <div className="meta" key={index}>
                            <div className="photo" style={{ backgroundImage: "url(" + value.cargo.image + ")" }}> </div>
                            <ul className="details">
                                <li className="author"><a href="#">{value.nombre}</a></li>
                                <li>{value.atencion}</li>
                                <li>{value.telefono}</li>
                                <li className="tags">
                                    <ul>
                                        <li><a href="#">{value.cargo.nombre}</a></li>
                                        <li><a href="#">{value.cargo.cargo}</a></li>
                                        <li><a href="#">{value.cargo.email}</a></li>
                                        <li><a href="#">{value.cargo.telefono}</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1>{value.nombre}</h1>
                            <h2>{value.direccion}</h2>
                            <h2> {value.atencion}</h2>
                            <p className="read-more">
                                <a href="#">Visitar</a>
                            </p>
                        </div>
                    </div>
                )
            );
        });
        return (
            <div className="container-tarjeta-secretaria">
                {i}
            </div>
        );
    }

    items(array) {
        let i = [];
        array.map((value, index) =>{
            i.push(
                (
                    <div className="alcalde-secretaria-group" key={index}>
                        {this.itemsGroup(value)}
                    </div>
                )
            );
        });
        return i;
    }

    render() {
        return (
            <div className="alcalde-secretarias-campos">
                <h1>Organigrama</h1>
                {this.items(AlcaldeJSON.sercretarias)}
            </div>

        );
    }
}

export default AlcaldeSecretaria;