import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./router/routes";
import {Header} from "./features/header";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <Routes/>
            </div>
        </BrowserRouter>

    );
}

export default App;
