import React from 'react';
import '../styles/HeaderAdmin.css';

function HeaderAdmin(props){
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="headerAdmin">
                <div className="container">
                    <h3>Alcaldia de Cúcuta</h3>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default HeaderAdmin;