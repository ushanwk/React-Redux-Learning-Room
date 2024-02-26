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
        })
    }
});
