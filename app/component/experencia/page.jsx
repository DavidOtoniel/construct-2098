import React from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import ImgPro from '@/app/page/imgPro/page';
import ExperienciaCode from '@/app/page/experiencia/page';

const Exprencia = () => {


    const homePageLinks = [
        { text: 'Nosotros', href: '/component/nosotros' },
        { text: 'Productos y Servicios', href: '/component/productos' },
        { text: 'Experencia', href: '#' },
        { text: 'Proyeccion Social', href: '/component/proyeccion' },
        { text: 'Contactanos', href: '/component/contacto' },

    ];


    // const titulo = {
    //     nombre: 'Concreto'
    // }
    const linkExperiencia = [
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },
        {
            imgSrc: '/img/img2.jpg',
            imgWidth: '200',
            imgHeight: '200',
            imgAlt: 'img experiencia'

        },

    ];



    return (
        <div>
            <Navbar
                titulo={'Constructor'}
                links={homePageLinks}
            />

            <ImgPro
                src={'/img/producto.jpg'}
                width={1000}
                height={450}
                alt={`Imagen del Carrusel`}
                className="d-block w-100 img"
            />

            <ExperienciaCode
                titulo={'Concreto'}
                experiencias={linkExperiencia}
            />
            <ExperienciaCode
                titulo={'Casas'}
                experiencias={linkExperiencia}
            />

        </div>
    )
}

export default Exprencia