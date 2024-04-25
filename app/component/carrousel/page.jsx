import React from 'react'
import '../carrousel/_carousel.scss'
import Image from 'next/image';


const Carousel = ({ carouselImages, width, height, children }) => {


    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    {carouselImages.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <Image src={item.image} className="d-block w-100 img" alt={`Carousel Image ${index} `} width={width} height={height} />
                            <div className="carousel-caption  d-md-block">
                                {item.caption && item.caption.title && <h5>{item.caption.title}</h5>}
                                {item.caption && item.caption.text && <p>{item.caption.text}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="overlay">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Carousel