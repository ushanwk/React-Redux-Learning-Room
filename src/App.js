import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./Store/Reducers/number-slice";

function App() {

    const number = useSelector((store) => store.numberSlice.number);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{number}</h1>

            <button onClick={() => dispatch(increment(1))}>Increment</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        </div>
    );
}

export default App;
