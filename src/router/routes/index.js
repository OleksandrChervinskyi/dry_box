import {Redirect, Route, Switch} from "react-router-dom";
import {AboutPage} from "../../features/about-page";
import {HomePage} from "../../features/home-page";

export const Routes = () => {
    return (

        <Switch>
            <Route path={'/about'} component={AboutPage}/>
            <Route path={'/main'} component={HomePage} exact/>
            <Route path={'/'} exact>
                <Redirect to="/main"/>
            </Route>
        </Switch>
    )
}