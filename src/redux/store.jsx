import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popupSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
    }
});

export default store;