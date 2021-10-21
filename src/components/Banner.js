import React from 'react';

import Banner1 from '../images/galeria/1.jpg';
import Banner2 from '../images/galeria/2.jpg';
import Banner3 from '../images/galeria/3.jpg';
import './styles/Banner.css';
class Banner extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className ="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Banner1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;