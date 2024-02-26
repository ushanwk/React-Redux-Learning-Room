const defaultState = {
    number: 0
}

const numberActionTypes = {
    INC: 'increment',
    DEC: 'decrement',
}

export const numberIncrement = (payload = 1) => ({
    type: numberActionTypes.INC,
    payload,
})

export const numberDecrement = (payload = 1) => ({
    type: numberActionTypes.DEC,
    payload,
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case numberActionTypes.INC:
            return {
                number: state.number + action.payload
            }
        case numberActionTypes.DEC:
            return {
                number: state.number - action.payload
            }
        default:
            return state
    }
    return state;
}

export default reducer;
