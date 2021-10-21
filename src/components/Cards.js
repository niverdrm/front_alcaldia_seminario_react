import React from 'react'
import Card from './Card'
import cards from '../jsons/temas.json';
import './styles/CardTemas.css'

function Cards() {
    return (
        <div className="light-back">
        <div className="container col-10 d-flex justify-content-center align-items-center h-100 bg-white">
            
            <div className="row col-10">
            <div className="encabezado col-md-12">
            <h1 className="tit_temas">Temas de Interés</h1>
      <p>Mi ciudad te brinda información sobre cómo funciona la administración pública y te acerca a los temas que te interesan y a la oferta de servicios públicos cerca de ti. Conócelos.</p>
      <br/>
      </div>
           {
               cards.map(card =>(
                <div className="col-md-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
               ))
           }
<hr></hr>
            </div>
        </div>
        </div>
    )
}

export default Cards;

