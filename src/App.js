import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {HomePage} from "./features/home-page";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <HomePage/>
            </div>
        </BrowserRouter>

    );
}

export default App;
