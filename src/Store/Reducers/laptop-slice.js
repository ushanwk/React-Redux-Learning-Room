import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 10,
    brands: [],
}

const laptopSlice = createSlice({
    name: 'laptop',
    initialState,
    reducers: {
        addLaptop: (state, action) => ({
            count: state.count + action.payload
        }),
        removeLaptop: (state, action) => ({
            count: state.count - action.payload
        }),
    }
});

export const {addLaptop, removeLaptop} = laptopSlice.actions;
export default laptopSlice.reducer;
