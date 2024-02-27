import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    number: 0,
    computers: [],
}

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: (state, action) => ({
            number : state.number + action.payload,
        }),
        decrement: (state, action) => ({
            number : state.number - action.payload,
        }),
    }
});

export const {increment, decrement} = numberSlice.actions;
export default numberSlice.reducer;
