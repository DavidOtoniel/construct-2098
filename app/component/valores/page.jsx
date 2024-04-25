import React from 'react';
import '../valores/_valores.scss'

const Valores = ({ valores }) => {


    return (
        <div>
            <section id="valores" className="container text-center mt-3">
                {/* <h2 className="text-center mt-3">{tituloPrincipal}</h2>
                <p className="text-center">{parrafo}</p> */}

                <div className=" text-center row">
                    {valores.map((valore, index) => (
                        <div key={index} className="container text-center col-sm-12 col-md-6 col-lg-4 g-3">
                            <article className=" card text-center seccion">
                                <h5 className="text-center">{valore.titulo}</h5>
                                <small className="text-center">{valore.descripsion}</small>
                            </article>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Valores 