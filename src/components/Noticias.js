import React from 'react';

import './styles/Noticia.css';
class Noticias extends React.Component{
    state = {
        data: [],
        url: 'http://localhost:8081/',
    };
    
    componentDidMount(){
        this.fetchNews();
    }

    fetchNews = async () => {
        const response = await fetch(`${this.state.url}noticia`);
        const data = await response.json();
        this.setState({
            data : data,
        });
    }
    render(){  
        return(
            <div className="dark-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Noticias</h2>    
                    </div>
                    <div className="row ">
                    {
                        this.state.data.map((noticia) => (
                            <div key={noticia.idNoticia} className="news-card col-sm-12 col-md-6 col-lg-4">
                                <div className="card ">
                                    <div className="overflow">
                                    <img className="card-img-top" src= {`${this.state.url}uploads/${noticia.fotos[0].descripcion}`} alt="Card image cap"/>
                                    </div>
                                        <div className="card-body dark-back">
                                            <h5 className="new-title">{noticia.descripcion}</h5>
                                            <p className="light-back">{noticia.titulo}</p>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="button_view_more">
                        <a className="btn btn-light">Ver más</a>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Noticias;