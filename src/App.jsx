import './customBootstrap.scss'
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import QueSon from './components/que-son';
import Tratamiento from './components/tratamiento';
import Beneficios from './components/beneficios';
import PreguntasFrecuentes from './components/preguntasFrecuentes';
import ContactBubble from './components/contactBubble';
import CarouselSteps from './components/carouselPasos';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Carousel/>
     
      <main >
        <QueSon/>
        <Tratamiento/>
        <CarouselSteps/>
        <Beneficios/>
        <PreguntasFrecuentes/>
      </main>
    

      <ContactBubble/>
    </div>
  );
}

export default App;
