import React from 'react'
import './styles/CardTemas.css'
function Card(props) {
    return (       
        <div className="card"> 
            <div className="overflow">
                <a id="link" href={props.url} target="_blanck">
                    <img src={props.imageSource} alt="" className="card-img-top"/>
                </a>
            </div>
            <div className="card-body justify-content-center">
                <a id="link" href={props.url} target="_blanck">
                    <h6 className="card-tit">
                        <span className="titulito">{props.title}</span>
                    </h6>
                </a>
                <a id="link" href={props.url} target="_blanck">
                    <p className="card-te">{props.text}</p>
                </a>  
            </div>   
        </div>
    )
}

export default Card;
