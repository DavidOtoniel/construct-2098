import React from 'react';
import Image from 'next/image';
import '../contacto/_contacto.scss'
import Navbar from '../navbar/page';

const Contactos = () => {

    const styleConta = {
        titulo: {
            fontWeight: 900,
            fontSize: '2rem'
        },
        parrafo: {
            textAlign: 'center',
            fontWeight: 900,
            fontSize: '1.2rem',
            color: 'gray',
            // marginTop: '1rem',
        },

    }

    const homePageLinks = [
        { text: 'Nosotros', href: '/component/nosotros' },
        { text: 'Productos y Servicios', href: '/component/productos' },
        { text: 'Experencia', href: '/component/experencia' },
        { text: 'Proyeccion Social', href: '/component/proyeccion' },
        { text: 'Contactanos', href: '/component/contacto' },

    ];

    return (
        <div>
            <Navbar
                titulo={'Constructor'}
                links={homePageLinks}
            />
            <div className="carousel slide " data-bs-ride="carousel">
                {/* Interior del carrusel */}
                <div className="carousel-inner">
                    {/* Imagen del carrusel */}
                    <Image
                        src={'/img/nosotro.jpg'}
                        width={1000}
                        height={400}
                        alt={`Imagen del Carrusel`}
                        className="d-block w-100 img"
                    />

                </div>
                <div className="overlay"></div>

            </div>
            <div className="container">
                <div className="contacto">
                    <h5 className="titulo-contacto text-center mt-5" style={styleConta.titulo}>Contactanos</h5>
                    <div className="line-principal"></div>
                    <p className="parrafo-contacto" style={styleConta.parrafo}>Construyamos Bien Juntos</p>
                </div>
            </div>

            <div className="container">
                <form action="" className="formulario">
                    <div className="contenedor-campo">
                        <div className="campo">
                            <input type="text" className="form-controll" placeholder="Nombre" />
                        </div>
                        <div className="campo">
                            <input type="email" placeholder="Correo" require />
                        </div>

                        <div className="campo">
                            <input type="text" placeholder="Asunto" />
                        </div>

                        <div className="campo">
                            <input type="number" placeholder="Numero de Contacto" min="0" />
                        </div>
                        <div className="campo">
                            <textarea name="" id="" ></textarea>
                        </div>
                        <div className="campo ">
                            <button className="btn btn-primary">Enviar</button>
                        </div>
                    </div>



                </form>

            </div>
        </div>
    )
}

export default Contactos