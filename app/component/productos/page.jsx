import React from 'react';
import Image from 'next/image';
import '../productos/_producto.scss'
import Navbar from '../navbar/page';


const Producto = () => {

    const homePageLinks = [
        { text: 'Nosotros', href: '/component/nosotros' },
        { text: 'Productos y Servicios', href: '/component/productos' },
        { text: 'Experencia', href: '/component/experencia' },
        { text: 'Proyeccion Social', href: '/component/proyeccion' },
        { text: 'Contactanos', href: '/component/contacto' },

    ];


    const productos = [
        {
            imgSrc: '/img/img1.jpg',
            imgWidth: '400',
            imgHeight: '250',
            imgAlt: 'producto1',
            titulo: 'Construccion',
            descripcion: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatibus velit
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
            `,
            btnText1: 'Ver Mas',
            btnText2: 'Cotizar'
        },
        {
            imgSrc: '/img/img1.jpg',
            imgWidth: '400',
            imgHeight: '250',
            imgAlt: 'producto1',
            titulo: 'concreto',
            descripcion: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatibus velit
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
            `,
            btnText1: 'Ver Mas',
            btnText2: 'Cotizar'
        },
        {
            imgSrc: '/img/img1.jpg',
            imgWidth: '400',
            imgHeight: '250',
            imgAlt: 'producto1',
            titulo: 'alquiler de maquinas',
            descripcion: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatibus velit
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
                mollitia commodi quibusdam voluptatem pariatur voluptates, magni quas obcaecati.
            `,
            btnText1: 'Ver Mas',
            btnText2: 'Cotizar'
        },
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
                        src={'/img/producto.jpg'}
                        width={1000}
                        height={450}
                        alt={`Imagen del Carrusel`}
                        className="d-block w-100 img"
                    />
                    {/* Leyenda del carrusel */}
                    <div className="container">
                        <div className="carousel-caption d-md-block">
                            <h5>Productos y Servicios</h5>
                            <div className="line-principal"></div>
                            <p className="parrafo-nosotros">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nulla iure
                                illo asperiores consequatur voluptatum adipisci. Odio facilis repellendus maiores laboriosam corrupti nemo architecto nisi!
                                illo asperiores consequatur voluptatum adipisci. Odio facilis repellendus maiores laboriosam corrupti nemo architecto nisi!
                            </p>
                        </div>
                    </div>
                </div>
                {/* Superposición y botón */}
                <div className="overlay"></div>
            </div>

            <div className="productos container text-center">
                {productos.map((producto, index) => (
                    <div key={index} className="container">
                        <div className="row g-5">
                            <div className="img-producto col-sm-12 col-md-12 col-lg-6 my-5">
                                <Image
                                    src={producto.imgSrc}
                                    width={producto.imgWidth}
                                    height={producto.imgHeight}
                                    alt={producto.imgAlt}
                                    className="d-block w-100 img"
                                />
                            </div>

                            <div className="info-productos text-center col-sm-12 col-md-12 col-lg-6 ">
                                <div className="text-productos">
                                    <h5>{producto.titulo}</h5>
                                    <p>{producto.descripcion}</p>
                                </div>
                                <div className=" btn-productos">
                                    <button className="btn btn-secondary">{producto.btnText1}</button>
                                    <button className="btn btn-primary">{producto.btnText2}</button>
                                </div>
                                <div className="line-productos "></div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Producto;