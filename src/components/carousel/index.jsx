import './index.scss'

const Carousel = () => {
    return (
        <div id="carouselHome" className="carousel slide carousel-fade" data-ride="carousel" data-touch="true">
            <ol className="carousel-indicators">
                <li data-target="#carouselHome" data-slide-to="0"></li>
                <li data-target="#carouselHome" data-slide-to="1"></li>
                <li data-target="#carouselHome" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="./assets/img/di9.gif" alt="First slide"/>
                <h1>ALINADORES INVISIBLES</h1>
                <button className='btn btn-outline-light'>Quiero mis SM®</button>
                
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="./assets/img/di4.jpeg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="./assets/img/lala.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span> */}
            </a>
            <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span> */}
            </a>
        </div>
    )
}

export default Carousel
