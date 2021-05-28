import './index.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const CarouselSteps = () => {
    
    const [progressbar, setProgressbar] = useState('25%')

    const stepsData = [
        {img:'./assets/icon/diagnostico_color.png', title:'Diagnóstico Personalizado', description:'En la primer consulta evaluamos tu caso y solicitamos los estudios correspondientes.'},
        {img:'./assets/icon/escaneo_color.png', title:'Escaneo Intraoral', description:'Utilizamos un escaner de última tecnología que genera modelos digitales 3D de tu boca.'},
        {img:'./assets/icon/diseño_color.png', title:'Diseño Digital 3D de tu sonrisa', description:'Diseñamos tu sonrisa, replicando los diferentes estadíos en los que va a avanzar tu boca a medida que cambies los alineadores.'},
        {img:'./assets/icon/alineadores_color.png', title:'Entrega de Alineadores SM®', description:'Imprimimos y entregamos tu Kit Inicial de Alineadores SM®'}
    ]
    
    const settings = {
        // dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        fade: true,
        beforeChange: (currentSlide, nextSlide)=>setProgressbar((nextSlide+1)/stepsData.length*100+'%')
    };



    return (
        <div id='carouselsteps' >
            <div className='container'>
                <h2>Tu sonrisa perfecta <br /> en 4 pasos</h2>
                <Slider {...settings} onClick={()=>console.log(99)}>

                    {stepsData.map((step,index)=>{
                        return(
                        <div key={index} className="carousel-item">
                            <div className="card" >
                                <img src={step.img} alt="Card icon"/>
                                <div className="card-body">
                                    <h5 className="card-title">{step.title}</h5>
                                    <p className="card-text">{step.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                

                </Slider>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: progressbar}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSteps
