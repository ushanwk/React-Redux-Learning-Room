import './App.css';
import UseRed from "./UseRed/UseRed";
import {useDispatch, useSelector} from "react-redux";
import store from "./store/store";

function App() {

    const number = useSelector(store => store.number);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>{number}</h1>

            <button onClick={() => {
                dispatch({
                    type: 'increment',
                    payload: 1,
                })
            }}>Increment</button>

            <button onClick={() => {
                dispatch({
                    type: 'decrement',
                    payload: 1,
                })
            }}>Decrement</button>

        </div>
    );
}

export default App;
