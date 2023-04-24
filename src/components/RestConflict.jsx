import React from 'react'
import { clearCart,conflictResolve } from "../utils/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RestConflict = ({rname}) => {
const dispatch=useDispatch()
const navigate=useNavigate()

const [current_rname,id]=useSelector((store)=>{
    return [store.cart.rname,store.cart.r_id]
})
const handleYes =()=>{
    dispatch(clearCart())
    dispatch(conflictResolve())
}
const handleNo =()=>{
    dispatch(conflictResolve())
}
const changeRestaurant=(id)=>{
    // const navigate=useNavigate() i was declaring hooks here we should not do that it will give error
    dispatch(conflictResolve())
    // console.log("navigating to ",id)
    navigate(`/restaurant/${id}`);


}
  return (
    <div className="conflict" >
        <h2>Replace items already in cart?</h2>
        <p>Your cart contains dishes from <strong style={{cursor:'pointer'} } onClick={()=>{changeRestaurant(id)}}>{current_rname}</strong> .Do you want to discard the selection and add dishes from <strong>{rname} </strong></p>
        <div className="decision">
            <div className="no" onClick={handleNo}>NO</div>
            <div className="yes" onClick={handleYes}>YES</div>
        </div>
    </div>
  )
}

export default RestConflict