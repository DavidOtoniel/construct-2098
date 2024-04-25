import React from 'react';
import Image from 'next/image';

const ImgPro = ({ src, width, height, alt, className }) => {
    return (
        <div>
            <div className="carousel slide " data-bs-ride="carousel">
                {/* Interior del carrusel */}
                <div className="carousel-inner">
                    {/* Imagen del carrusel */}
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                        className={className}
                    />
                    {/* Leyenda del carrusel */}
                </div>
                {/* Superposición y botón */}
                <div className="overlay"></div>
            </div>
        </div>
    )
}

export default ImgPro