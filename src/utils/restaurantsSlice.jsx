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
    addRestaurants: (state, action) => {
      const newRestaurants = action.payload;

      // Find the index of the card with the id "popular_restaurants_title"
      const restaurantCardIndex = state.items.findIndex(
        (card) => card.card.card.id === "popular_restaurants_title"
      );

      if (restaurantCardIndex !== -1) {
        // Get the existing restaurants array
        const existingRestaurants =
          state.items[restaurantCardIndex].card.card.restaurants;

        // Combine existing and new restaurants
        const updatedRestaurants = [...existingRestaurants, ...newRestaurants];

        // Update the specific card in the state
        state.items[restaurantCardIndex] = {
          card: {
            card: {
              id: "popular_restaurants_title",
              restaurants: updatedRestaurants,
            },
          },
        };
      }
    },
  },
});

export const { setRestaurants, addRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
