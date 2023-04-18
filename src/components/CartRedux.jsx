import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const CartRedux=()=>{
    const dispatch=useDispatch()
    const deleteAll=()=>{
        dispatch(clearCart())
    }

    const {items,total}=useSelector((store)=>{
        return store.cart
    })

    const allCartItems=items.map((item,index)=>{
        return(
            <CartItem details={item} key={index}/>
        )
    })
    return (
        <>
        <h1 className="recommend"> This is the cart component that uses the cart slice of the Redux Store</h1>

        <div className="rest-menu">
        {(total>0)
           ?(
            <>
            <h2 className="recommend">Your Cart Items</h2>
            {allCartItems}
            <div className="add-dish" onClick={deleteAll}>Delete all?</div>
            </>
           )
           :(
            <h2>Your Cart is Empty</h2>
           )
        }
        </div>
        </>
    )
}

export default CartRedux