import { useContext } from "react";
import { Route, Switch } from "react-router"
import {PublicRoute} from './helperRoutes';
import {PrivateRoute} from './helperRoutes';
import { UserContext } from "../context/UserContext";
import HomeContainer from '../containers/HomeContainer'
import Login from '../components/login'

const Routes = () => {

    const {isAuthenticated} = useContext(UserContext)
    return (
        <Switch>
            <PublicRoute exact path="/" component={HomeContainer}/>
            <PublicRoute exact path="/profesional" component={Login}/>

                                
            {/* <PublicRoute exact path="/alineadores" component={ItemDetailContainer} /> */}


            {isAuthenticated && <PrivateRoute exact path="/welcome" component={HomeContainer}/>}
            <Route path="/error404"  component={HomeContainer}/>
            {/* <Route path="/**"> <Route/> */}

        </Switch>
    )
}

export default Routes 