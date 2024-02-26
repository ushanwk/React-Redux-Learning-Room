import {createStore} from "redux";

const defaultState = {
    number: 0
}

const reducer = (state = defaultState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;
