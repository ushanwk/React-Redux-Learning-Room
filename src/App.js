import './App.css';
import UseRed from "./UseRed/UseRed";
import {useSelector} from "react-redux";
import store from "./store/store";

function App() {

    const number = useSelector(store => store.number);

    return (
        <div className="App">
            <h1>{number}</h1>
        </div>
    );
}

export default App;
