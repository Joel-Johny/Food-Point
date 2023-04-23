import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',

    initialState:{
        items:[],//this is the cart item
        total:0,
        conflict:false,
        rname:'',
        r_id:0,
        totalBill:0,
        location:{lat:null,long:null}

    },
    reducers:{
        setLocation:((state,action)=>{
            const { latitude, longitude } = action.payload;
            //like normal react use state we should not mutate the original state we should return from reducer fn new state or if we mutate the old state aso it was working
            state.location.lat=latitude
            state.location.long=longitude
   
        }),
        addItem: (state,action)=>{
            // let sum=0
            if (state.items.length==0 || state.rname==action.payload.rname){
                state.items.push(action.payload)
                state.rname=action.payload.rname
                state.r_id=action.payload.r_id
                state.total=state.total+1
                cartSlice.caseReducers.updateBill(state)
            }
            // state.items.map((object,index)=>{
            //     sum=sum+object.count
            // })
            // state.total=sum

            else{
                state.conflict=true
            }

        },
        incrementItem:(state,action)=>{
            state.items.map((object,index)=>{
                if(object.name==action.payload.name){
                    object.count=object.count+1
                    cartSlice.caseReducers.updateBill(state)
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
                cartSlice.caseReducers.updateBill(state)

                }
            })

            state.total=state.total-1
        },
        conflictResolve:(state)=>{
            state.conflict=false
        },
        clearCart:((state)=>{
            state.items=[]
            state.total=0
        }),
        updateBill:((state)=>{
            let sum=0

            state.items.map((object)=>{
                sum=sum+((object.price/100)*object.count)
            })
            state.totalBill=sum

        })
    }

})

export default cartSlice.reducer
export const {setLocation,addItem,incrementItem,decrementItem,clearCart,conflictResolve,updateBill} =cartSlice.actions