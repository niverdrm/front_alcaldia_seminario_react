import React from 'react';

import './styles/Proyecto.css';
import planes from '../jsons/planes.json';
class Proyecto extends React.Component{
    render(){
        return(
            <div className="dark-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Planes, Programas y Proyectos</h2>    
                    </div>
                    <div className="row">
                    {
                         planes.map((plan) => (
                            <div key={plan.id} className="center-frame proyect-card col-md-6 col-lg-4">
                                <div className="card card2">
                                    <div className="overflow">
                                        <img className="card-img-top" src={plan.image} alt="Card image cap"/>
                                    </div>
                                    <div className="card-body dark-back text-center">
                                        <h5 className="center_tittle">{plan.tittle}</h5>
                                        <span className="center_description">{plan.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="button_view_more">
                        <a className="btn btn-light">Ver más</a>
                    </div>
                    {/*  {   planes.map((plan) => (
                            <div key={plan.id} className="col-md-6">
                                <div className="row text-center white_space">
                                    <span className="notice">
                                        <img src={plan.image}/>
                                    </span>
                                </div>
                                <div  className="row white_space">
                                    <span className="center_tittle">{plan.tittle}</span>
                                </div>
                                <div className="row white_space">
                                    <span className="center_description">{plan.description}</span>
                                </div>                
                            </div>
                        ))} */}   
                </div>
            </div>   
        );
    }
}

export default Proyecto; 