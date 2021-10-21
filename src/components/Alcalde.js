import React from 'react';
import AlcaldeBiografia from './alcalde/AlcaldeBiografia';
import AlcaldeSecretaria from './alcalde/AlcaldeSecretaria';
import './styles/Alcalde.css';

class Alcalde extends React.Component {
    constructor(props) {
        super(props);
    }

    svgTop() {
        return (
            <div className="alcalde-svg-one">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>
        );
    }

    svgBottom() {
        return (
            <div className="alcalde-svg-one">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
                </svg>
            </div>
        );
    }

    render() {
        return (
            <div className="alcalde">
                <AlcaldeBiografia></AlcaldeBiografia>
                <div className="alcalde-secretarias">
                    {this.svgTop()}
                    <AlcaldeSecretaria></AlcaldeSecretaria>
                    {this.svgBottom()}
                </div>
            </div>
        );
    }
}

export default Alcalde;