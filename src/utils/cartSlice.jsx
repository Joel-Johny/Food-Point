import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [], //this is the cart item
    total: 0,
    conflict: false,
    rname: "",
    r_id: 0,
    totalBill: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // let sum=0
      if (state.items.length == 0 || state.rname == action.payload.rname) {
        state.items.push(action.payload);
        state.rname = action.payload.rname;
        state.r_id = action.payload.r_id;
        state.total = state.total + 1;
        cartSlice.caseReducers.updateBill(state);
      }
      // state.items.map((object,index)=>{
      //     sum=sum+object.count
      // })
      // state.total=sum
      else {
        state.conflict = true;
      }
    },
    incrementItem: (state, action) => {
      state.items.map((object, index) => {
        if (object.name == action.payload.name) {
          object.count = object.count + 1;
          cartSlice.caseReducers.updateBill(state);
        }
      });

      state.total = state.total + 1;
    },

    decrementItem: (state, action) => {
      state.items.map((object, index) => {
        if (object.name == action.payload.name) {
          object.count = object.count - 1;

          if (object.count == 0) {
            state.items.splice(index, 1);
          }
          cartSlice.caseReducers.updateBill(state);
        }
      });

      state.total = state.total - 1;
    },
    conflictResolve: (state) => {
      state.conflict = false;
    },
    clearCart: (state) => {
      state.items = [];
      // he says we cant do the above
      state.total = 0;
    },
    updateBill: (state) => {
      let sum = 0;
      state.items.map((object) => {
        console.log(object);
        sum =
          sum +
          ((object.price ? object.price : object.defaultPrice) / 100) *
            object.count;
      });
      state.totalBill = sum;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  incrementItem,
  decrementItem,
  clearCart,
  conflictResolve,
  updateBill,
} = cartSlice.actions;
