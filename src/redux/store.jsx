import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popupSlice";
import countReducer from "./reducers/countSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        count: countReducer,
    }
});

export default store;