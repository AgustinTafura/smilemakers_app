import Navbar from '../components/navbar'
import Beneficios from "../components/beneficios"
import Carousel from "../components/carousel"
import CarouselSteps from "../components/carouselPasos"
import PreguntasFrecuentes from "../components/preguntasFrecuentes"
import QueSon from "../components/que-son"
import Tratamiento from "../components/tratamiento"

const HomeContainer = () => {
    return (
        <>
            <Navbar/>
            <Carousel/>
        
            <main >
                <QueSon/>
                <Tratamiento/>
                <CarouselSteps/>
                <Beneficios/>
                <PreguntasFrecuentes/>
            </main>
        </>
    )
}

export default HomeContainer
