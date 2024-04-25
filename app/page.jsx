import Image from 'next/image'
import styles from './page.module.css';
import Navbar from './component/navbar/page';
import Carousel from './component/carrousel/page';
import InfoPrincipal from './component/infoPrincipal/page';

export default function Home() {


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


  return (
    <div>

      <Navbar
        titulo={'Constructor'}
        links={homePageLinks}
      />

      <Carousel
        carouselImages={carouselImages}
        width={1000}
        height={520}
      />

      <InfoPrincipal
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui. Repellatnon perspiciatis consectetur adipisci molestiae fuga amet vel aperiam?'}
        titulo={'CREEMOS EN SER MEJORES CADA DÍA'}
        text2={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui. Repellatnon perspiciatis
          consectetur adipisci molestiae fuga amet vel aperiam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui. Repellatnon perspiciatis
          consectetur adipisci molestiae fuga amet vel aperiam?
        `}

        text3={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui. Repellatnon perspiciatis
          consectetur adipisci molestiae fuga amet vel aperiam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui. Repellatnon perspiciatis
          consectetur adipisci molestiae fuga amet vel aperiam?
        `}
      />


    </div>

  )
}
