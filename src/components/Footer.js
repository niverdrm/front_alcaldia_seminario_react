import React from "react";

import "./styles/Footer.css";
import Copyright from "./Footer/Copyright";
import Contacto from "./Footer/Contacto";
import Boletin from "./Footer/Boletin";
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Boletin />
        <Contacto />
        <Copyright />
        {/* <div className="container-fluid footer_top">
                        <p className="special_font"><strong>Suscribase al Boletin Digital</strong></p>
                        <button className="btn btn-primary btn-lg">Suscribirme</button>
                        <p>Desubscribirme</p> 
                </div>

                <div className="container-fluid footer_middle">
                    <div className="row">
                        <div className="col-sm-8 col-md-7">
                            <div className="offset-4">
                                <h3>Contáctenos</h3>
                            </div>
                            <div className="row">
                                <div className="offset-1 col-5">
                                    <p><strong>Horario atención</strong> lunes a viernes de 8 am a 12 pm y de 2 pm a 5 pm</p>
                                    <p>Atención al ciudadano</p>
                                    <p>Directorio dependencias</p>
                                </div>
                            <div className="container col-5">
                                <p><strong>Linea Nacional:</strong> 01 8000 222 195</p>
                                <p><strong>Lineas Locales:</strong> 195 - (57+2) 887 9020</p>
                                <p>NIT 890399011-3</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-none d-sm-block offset-lg-2 offset-md-1 col-sm-4 col-md-2">
                            <img src="https://1.bp.blogspot.com/-tCDXxsQb7dE/X54LZYfvjkI/AAAAAAABhJ4/pAYf0nJ-mTsSoozwSBm8IgIU7zXJ1EuzACLcBGAsYHQ/s0/FC%2BBarcelona256x.png" alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className="row">
                        <div className="d-none d-md-block col-md-7">
                            <div className="container footer_infoAlcaldia">
                                <p>Alcaldia de Cúcuta - Nit 890399011-3</p>
                                <p className="letter_color">Politicas de seguridad de la informacion y protección de datos personales</p>
                                <p>Todos los derechos reservados 2021</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <div className="row redes">
                                <div className="col-sm-4 col-md-2">
                                    <p>Siguenos en:</p>
                                </div>
                                <div className="col-sm-6 col-md-10">
                                     <img className="logo" src={facebook} alt="Logo Facebook"></img>
                                    <img className="logo" src={twitter} alt="Logo Twitter"></img>
                                    <img className="logo" src={youtube} alt="Logo Youtube"></img>
                                    <img className="logo" src={instagram} alt="Logo Instagram"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </React.Fragment>
    );
  }
}

export default Footer;
