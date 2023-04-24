import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        opened: false,
    },
    reducers: {
        openPopup: (state) => {
            state.opened = true;
        },
        closePopup: (state) => {
            state.opened = false;
        }
    }
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;