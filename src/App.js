import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./router/routes";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Routes/>
            </div>
        </BrowserRouter>

    );
}

export default App;
