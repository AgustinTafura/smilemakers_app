import './App.scss';
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import QueSon from './components/que-son';
import Tratamiento from './components/tratamiento';
import Ventajas from './components/ventajas';
import PreguntasFrecuentes from './components/preguntasFrecuentes';
import ContactBubble from './components/contactBubble';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Carousel/>
     

      <QueSon/>
      <Tratamiento/>
      <Ventajas/>
      <PreguntasFrecuentes/>

    

      <ContactBubble/>
    </div>
  );
}

export default App;
