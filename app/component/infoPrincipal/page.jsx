import React from 'react';
import '../infoPrincipal/_infoPrincipal.scss';

const InfoPrincipal = ({ text, titulo, text2, text3 }) => {
    return (
        <div className="container">
            <div className="line-principal"></div>
            <div className="text-principal text-center">
                <p className="parrafo-principal">{text}</p>
                <h4 className="titulo-principal">{titulo}</h4>
                <div className="line-principal2"></div>
                <div className="parrafos-principal">
                    <p className="parrafos-prin text-center">{text2}</p>
                    <p className="parrafos-prin text-center">{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoPrincipal