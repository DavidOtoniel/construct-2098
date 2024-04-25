import React from 'react';
import Image from 'next/image';

const ExperienciaCode = ({ titulo, experiencias }) => {

    return (
        <div>
            <section id="valores" className="container text-center mt-3">
                <h2 className="text-center mt-3">{titulo}</h2>

                <div className=" text-center row">
                    {experiencias.map((experiencia, index) => (
                        <div key={index} className="container text-center col-sm-12 col-md-6 col-lg-4 g-3 mt-3">
                            <article className="  text-center seccion">
                                <Image
                                    src={experiencia.imgSrc}
                                    width={experiencia.imgWidth}
                                    height={experiencia.imgHeight}
                                    alt={experiencia.imgAlt}
                                    className="d-block w-100 img"
                                />
                            </article>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ExperienciaCode