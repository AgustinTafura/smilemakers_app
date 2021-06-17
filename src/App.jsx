import './customBootstrap.scss'
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/js/all.js';

import {BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router"

import ContactBubble from './components/contactBubble';
import Routes from './routes/routes';
import { UserProvider } from './context/UserContext';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App" >
      <BrowserRouter  basename={"/smilemakers"}>

        <UserProvider>


          <Routes/>

          <ContactBubble/>
        

        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
