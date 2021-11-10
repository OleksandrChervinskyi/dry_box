import {Redirect, Route, Switch} from "react-router-dom";
import {About} from "../../features/pages/about";
import {HomePage} from "../../features/pages/home";
import {RegisterPage} from "../../features/pages/register";
import {LoginPage} from "../../features/pages/login";

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/register'} component={RegisterPage}/>
            <Route path={'/login'} component={LoginPage}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/main'} component={HomePage} exact/>
            <Route path={'/'} exact>
                <Redirect to="/main"/>
            </Route>
        </Switch>
    )
}