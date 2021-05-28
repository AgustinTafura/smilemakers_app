import Beneficios from "../components/beneficios"
import Carousel from "../components/carousel"
import CarouselSteps from "../components/carouselPasos"
import PreguntasFrecuentes from "../components/preguntasFrecuentes"
import QueSon from "../components/que-son"
import Tratamiento from "../components/tratamiento"

const HomeContainer = () => {
    return (
        <div>
            <Carousel/>
        
            <main >
                <QueSon/>
                <Tratamiento/>
                <CarouselSteps/>
                <Beneficios/>
                <PreguntasFrecuentes/>
            </main>
        </div>
    )
}

export default HomeContainer
