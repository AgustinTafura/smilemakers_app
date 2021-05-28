import CarouselSteps from '../carouselPasos'
import './index.scss'

const Tratamiento = () => {
    return (
        <section id='tratamiento' className='container'>
            <h1>Tratamiento</h1>
            <div>
                <div>
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

                </div>
                <div>
                    <CarouselSteps/>
                </div>

            </div>
 
        </section>
    )
}

export default Tratamiento
