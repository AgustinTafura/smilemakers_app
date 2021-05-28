import './customBootstrap.scss'
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js'

import {BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router"
import Navbar from './components/navbar';
import ContactBubble from './components/contactBubble';
import Routes from './routes/routes';
import { UserProvider } from './context/UserContext';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App" >
      <BrowserRouter  basename={"/smilemakers"}>

        <UserProvider>

          <Navbar/>
          <Routes/>

          <ContactBubble/>
        

        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
