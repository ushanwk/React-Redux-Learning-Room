import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {numberDecrement, numberIncrement} from "./store/reducers/number";

function App() {

    const number = useSelector(store => store.number);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>{number}</h1>

            <button onClick={() => {
                dispatch(numberIncrement(1));
            }}>Increment</button>

            <button onClick={() => {
                dispatch(numberDecrement(1));
            }}>Decrement</button>

        </div>
    );
}

export default App;
