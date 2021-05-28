import { useContext } from "react";
import { Route, Switch } from "react-router"
import {PublicRoute} from './helperRoutes';
import {PrivateRoute} from './helperRoutes';
import { UserContext } from "../context/UserContext";
import HomeContainer from '../containers/HomeContainer'

const Routes = () => {

    const {isAuthenticated} = useContext(UserContext)
    return (
        <Switch>
            <PublicRoute exact path="/" component={HomeContainer}/>

                                
            {/* <PublicRoute exact path="/alineadores" component={ItemDetailContainer} /> */}


            {isAuthenticated && <PrivateRoute exact path="/welcome" component={HomeContainer}/>}
            <Route path="/error404"  component={HomeContainer}/>
            {/* <Route path="/**"> <Route/> */}

        </Switch>
    )
}

export default Routes 