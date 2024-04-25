import React from 'react';
import '../footer/_footer.scss';

const Footer = ({ ciudad, estado, contactos, emai, copy, servicios1, servicios2, servicios3, textos1, textos2, textos3 }) => {
    const renderElement = (titulo, textos) => (
        <div className={titulo === 'info' ? 'info' : 'servicios'}>
            {titulo !== 'info' && <h4>{titulo}</h4>}
            {textos && textos.map((texto, index) => (
                <p key={index} className="parrafos">{texto}</p>
            ))}
        </div>
    );

    return (
        <div className="footer row">
            <div className="container">
                {renderElement('info', [ciudad, estado, contactos, emai, copy])}
                {renderElement(servicios1, [textos1, textos2, textos3])}
                {renderElement(servicios2, [textos1, textos2, textos3])}
                {renderElement(servicios3, [textos1, textos2, textos3])}
            </div>
        </div>
    );
};

export default Footer;
