import React from 'react'
import Navbar from '../navbar/page'
import ImgPro from '@/app/page/imgPro/page';
import '../proyeccion/_proyeccion.scss';

const Proyeccion = ({ imgProyeccion }) => {
    // navbar

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

            <div className="container row text-center">
                <div className="img-proyec text-center col-sm-12 col-md-6">
                    <ImgPro
                        src={'/img/img3.jpeg'}
                        width={1000}
                        height={400}
                        alt={`Imagen del Carrusel`}
                        className="d-block w-100 img"
                    />
                </div>
                <div className="text-proyec col-sm-12 col-md-6">
                    <h2 className="text-center titulo">Proyeccion Social</h2>
                    <p className="parrafo text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam minus earum
                        est consequuntur numquam totam, aut dolorum esse atque, similique nam! Cupiditate,
                        exercitationem explicabo.</p>

                </div>

            </div>

            <div className=" text-center">
                <video autoPlay loop style={{ width: '100%' }}>
                    <source autoplay src="/img/video1.mp4" />
                </video>
            </div>

        </div>

    )
}

export default Proyeccion