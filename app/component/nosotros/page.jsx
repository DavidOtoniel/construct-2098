"use client";
import React, { useEffect } from 'react';
import Navbar from '../navbar/page';
import Carousel from '../carrousel/page';
import '../nosotros/_nosotros.scss'
import Image from 'next/image';
import Valores from '../valores/page';


const Nosotros = () => {

    const homePageLinks = [
        { text: 'Nosotros', href: '/component/nosotros' },
        { text: 'Productos y Servicios', href: '/component/productos' },
        { text: 'Experencia', href: '/component/experencia' },
        { text: 'Proyeccion Social', href: '/component/proyeccion' },
        { text: 'Contactanos', href: '/component/contacto' },

    ];


    const carouselImages = [
        {
            image: '/img/img1.jpg',
            caption: {
                title: 'Título 1',
                text: 'Texto 1',
            },
        },
        {
            image: '/img/img2.jpg',
            caption: {
                title: 'Título 2',
                text: 'Texto 2',
            },
        },
        {
            image: '/img/img3.jpeg',
            caption: {
                title: 'Título 2',
                text: 'Texto 2',
            },
        },
    ];


    // valores   
    const valoresData = [
        {
            titulo: 'Nuestros  valores',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            nobis molestias inventore itaque corporis maxime id!
            `,
        },
        {
            titulo: 'Responsabilidad',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            nobis molestias inventore itaque corporis maxime id!
            `,
        },
        {
            titulo: 'Respeto',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            nobis molestias inventore itaque corporis maxime id!
            `,
        },
        {
            titulo: 'Honestidad',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            nobis molestias inventore itaque corporis maxime id!
            `,
        },
        {
            titulo: 'Responsabilidad Scocial Empresarial',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            `,
        },
        {
            titulo: 'Mejora Continua',
            descripsion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem 
            corrupti obcaecati soluta, recusandae veritatis veniam necessitatibus. Commodi nemo 
            nobis molestias inventore itaque corporis maxime id!
            `,
        },


    ];

    useEffect(() => {
        const btnonclick = () => {
            // window.location.href = 'https://www.youtube.com/';
            window.open('https://www.youtube.com/', '_blank')
        }

        const btn = document.querySelector('#btn');
        btn.addEventListener('click', btnonclick);

        return () => {
            btn.removeEventListener('click', btnonclick);
        }

    }, [])


    return (

        <div>

            <Navbar
                titulo={'Constructor'}
                links={homePageLinks}
            />
            {/* Sección del carrusel */}
            <div className="carousel slide " data-bs-ride="carousel">
                {/* Interior del carrusel */}
                <div className="carousel-inner">
                    {/* Imagen del carrusel */}
                    <Image
                        src={'/img/nosotro2.jpg'}
                        width={1000}
                        height={500}
                        alt={`Imagen del Carrusel`}
                        className="d-block w-100 img"
                    />
                    {/* Leyenda del carrusel */}
                    <div className="container">
                        <div className="carousel-caption d-md-block">
                            <h5>NOSOTROS</h5>
                            <p className="parrafo-nosotros">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi recusandae itaque voluptatem. Quam maiores animi aut odit perferendis distinctio quasi, ea necessitatibus corrupti quo!
                            </p>
                        </div>
                    </div>
                </div>
                {/* Superposición y botón */}
                <div className="overlay">
                    <div className="btn-nosotros">
                        <button id="btn" className="btn btn-light">
                            Ver Proyectos
                        </button>
                    </div>
                </div>
            </div>

            {/* Sección principal */}
            <div className="nosotros-principal">
                <div className="container">
                    <h4 className="titulo-principal text-center">CREEMOS EN <span>CONSTRUIR BIEN</span></h4>
                </div>
            </div>

            {/* Sección del carrusel */}
            <div className="carrousel">
                <Carousel carouselImages={carouselImages} width={1000} height={320} />
            </div>

            {/* Sección de valores */}
            <div className="valores">
                <div className="container g-5">
                    <Valores valores={valoresData} />
                </div>
            </div>

            {/* Secciones adicionales */}
            <div className="nosotros-principal valores contenedor">
                <div className="container">
                    <h4 className="titulo-principal text-center">CREEMOS EN <span>CONSTRUIR BIEN</span></h4>
                </div>
            </div>

            <div className="valores container">
                <Valores valores={valoresData} />
            </div>
        </div>
    )
}

export default Nosotros


