const defaultState = {
    number: 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                number: state.number + action.payload
            }
        case 'decrement':
            return {
                number: state.number - action.payload
            }
        default:
            return state
    }
    return state;
}

export default reducer;
