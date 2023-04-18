import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',

    initialState:{
        items:[],//this is the cart item
        total:0
    },
    reducers:{

        addItem:(state,action)=>{
            // let sum=0
            state.items.push(action.payload)

            // state.items.map((object,index)=>{
            //     sum=sum+object.count
            // })
            // state.total=sum
            state.total=state.total+1

        },
        incrementItem:(state,action)=>{
            state.items.map((object,index)=>{
                if(object.name==action.payload.name){
                    object.count=object.count+1
                }
            })

            state.total=state.total+1
        },

        decrementItem:(state,action)=>{
            state.items.map((object,index)=>{
                if(object.name==action.payload.name){
                    object.count=object.count-1
                if(object.count==0){
                    state.items.splice(index,1)
                    }
                }
            })

            state.total=state.total-1
        },
        
        clearCart:((state)=>{
            state.items=[]
            state.total=0
        })
    }

})

export default cartSlice.reducer
export const {addItem,incrementItem,decrementItem,clearCart} =cartSlice.actions