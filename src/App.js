import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./features/header";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
            </div>
        </BrowserRouter>

    );
}

export default App;
