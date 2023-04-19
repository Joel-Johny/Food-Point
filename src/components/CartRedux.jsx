import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import DeleteCart from "./DeleteCart";
import { useNavigate } from "react-router-dom";


const CartRedux=()=>{
    const navigate=useNavigate()


    const deleteAll=()=>{
        setAlert(true) 
        
    }
    const goHome=()=>{
        navigate(`/`)
    }
    const [alert,setAlert]=React.useState(false)

    const {items,total,rname}=useSelector((store)=>{
        return store.cart
    })

    const allCartItems=items.map((item,index)=>{
        return(
            <CartItem details={item} key={index}/>
        )
    })
    return (
        <>
        <div className={alert ? 'opacity' : 'crContainer'}>
            
            <h1 className="recommend"> This is the cart component that uses the cart slice of the Redux Store</h1>

            <div className="rest-menu">
                {(total>0)
                ?(
                    <>
                    <h2 className="recommend">Your Cart Items from {rname}</h2>
                    {allCartItems}
                    <div className="yes" onClick={deleteAll}>Empty Cart?</div>
                    

                    </>
                )
                :(
                    <><div className="empty">
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0' style={{margin:'1rem',padding:`1rem`,height:`20rem`}}/>
                        <h2>Your Cart is Empty</h2>
                        <big>You can go to home page to view more restaurants</big>
                        <div className="see-rest" onClick={goHome}>SEE RESTAURANTS NEAR YOU</div>
                    </div>

                    </>
                )
                }
            </div>

        </div>
        <div className="rest-menu">
        {alert && <DeleteCart setter={setAlert}/>}
        </div>

        </>
    )
}

export default CartRedux