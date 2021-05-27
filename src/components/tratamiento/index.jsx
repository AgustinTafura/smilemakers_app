import './index.scss'

const Tratamiento = () => {
    return (
        <section id='tratamiento'>
            <h1>Tratamiento</h1>
            <p>
                El tratamiendo con Alineadores Invisibles 
                <b> SMILE MAKERS<span style={{fontSize:'0.7rem', verticalAlign: 'text-top'}}>® </span></b> 
                puede durar entre 9 a 18 meses, aunque se puede notar resultados visibles a partir de los 3 meses de uso.
            </p>
            <p>
                La cantidad de placas va a definir la duración del tratamiento y, dependiendo del grado de complejidad, puede hacerse en una o dos etapas.
            </p>
            <p>
                Durante el diseño de la sonrisa, se generan varios alineadores que van a ser cambiados cada 15 o 20 días, según indicación del ortodoncista y dependiendo de cada tratamiento.
            </p>
            <p>
                Te contamos paso a paso como te ayudamos a conseguir una sonrisa perfecta.

                • Comenzamos con un diagnóstico personalizado de cada caso.

                • Realizamos un escaneo intraoral, que genera modelos digitales 3D de tu boca.

                • Diseñamos tu sonrisa, replicando los diferentes estadíos en los que va a avanzar tu boca a medida que cambies los alineadores.

                • Imprimimos y entregamos tu Kit Inicial de Alineadores <b>SMILE MAKERS<span style={{fontSize:'0.7rem', verticalAlign: 'text-top'}}>®</span></b> 
            </p>
            <div id="carouselPasos" className="carousel slide carousel-fade" data-ride="carousel" data-touch="true" data-wrap='false'>
                <ol className="carousel-indicators">
                    <li data-target="#carouselPasos" data-slide-to="0"></li>
                    <li data-target="#carouselPasos" data-slide-to="1"></li>
                    <li data-target="#carouselPasos" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="./assets/img/di5.gif" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="./assets/img/di5.gif" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="./assets/img/di1.gif" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselPasos" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselPasos" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}

export default Tratamiento
