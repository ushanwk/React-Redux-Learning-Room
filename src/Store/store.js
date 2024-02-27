import {configureStore} from "@reduxjs/toolkit";
import numberSliceReducer from "./Reducers/number-slice";
import laptopSliceReducer from "./Reducers/laptop-slice";

const store = configureStore({
    reducer: {
        numberSlice: numberSliceReducer,
        laptopSlice: laptopSliceReducer,
    },
});

export default store;
