import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: { latitude: 0, longitude: 0, city: "" },
  reducers: {
    setLocation: (state, action) => {
      const { latitude, longitude , city } = action.payload;
      //like normal react use state we should not mutate the original state we should return from reducer fn new state or if we mutate the old state aso it was working
      state.latitude = latitude;
      state.longitude = longitude;
      state.city = city
    },
  },
});

export default locationSlice.reducer;
export const { setLocation } = locationSlice.actions;
