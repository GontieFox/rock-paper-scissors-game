import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        resetCount: (state) => {
            state.count = 0;
        }
    }
});

export const { increment, decrement, resetCount } = countSlice.actions;

export default countSlice.reducer;