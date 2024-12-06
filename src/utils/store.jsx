import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantsSlice from "./restaurantsSlice";
import locationSlice from "./locationSlice";
const store=(configureStore({
    reducer:{
        cart:cartSlice,
        restaurants:restaurantsSlice,
        location:locationSlice
    }
}))

export default store