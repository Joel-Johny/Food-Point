import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        items: [],
    },
    reducers: {
        setRestaurants: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;