import React from 'react';

import { FaCheckSquare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import './styles/ItemsParticipacion.css';

class ItemsParticipacion extends React.Component{     
    render(){
        return(
            <div className="dark-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Participación Ciudadana</h2>    
                    </div>
                    <div className="row">
                        <div className="item2">
                            <div className="block-container"> 
                                <span className="d-block">  
                                <FaCheckSquare color="white" fontSize="4em"/>
                                </span>
                                <span className="icon_description">Encuestas</span>
                            </div>
                        </div>
                        <div className="item2">
                            <div className="block-container"> 
                                <span className="d-block">  
                                <FaEye color="white" fontSize="4em"/>
                                </span>
                                <span className="icon_description">PQR</span>
                            </div>
                        </div>
                        <div className="item2">
                            <div className="block-container"> 
                                <span className="d-block">  
                                <FaEdit color="white" fontSize="4em"/>
                                </span>
                                <span className="icon_description">Encuestas</span>
                            </div>
                        </div>
                        <div className="item2">
                            <div className="block-container"> 
                                <span className="d-block">  
                                <FaFileAlt color="white" fontSize="4em"/>
                                </span>
                                <span className="icon_description">Seguimiento PQR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );     
    }
}
export default ItemsParticipacion;