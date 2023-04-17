import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',

    initialState:{
        items:["Chicken"]
    },
    reducers:{

        addItem:(state,action)=>{
            return state.items.push(action.payload)
        }
    }

})

export default cartSlice.reducer
export const {addItem} =cartSlice.actions