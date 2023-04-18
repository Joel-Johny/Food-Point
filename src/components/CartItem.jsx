import React from "react";
import { url } from "../constant";
import { incrementItem,decrementItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const RestaurantItem=({details,rname})=>{
    const {name,isVeg,price,defaultPrice,imageId,description}=details
    const nonveg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
    const veg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
    const cartItems=useSelector((store)=>{
        return store.cart.items
    })
    let dish_count=0
    cartItems.forEach((object)=>{
        if(name==object.name)
            dish_count= object.count
    })
    const dispatch=useDispatch()

    const increment =()=>{
        dispatch(incrementItem({
            name:name
        }))

    }

    const decrement=()=>{

        dispatch(decrementItem({
                name:name
            }))

    }
    return(
        <div className="rest-item">
            <div className="item-info">
                {isVeg?<img src={veg} height={'25px'} width={'25px'}/>:<img src={nonveg}  height={'25px'} width={'25px'}/>}
                <h2>{name}</h2>
                <h3>₹{price?price/100:defaultPrice/100} </h3>
                <p>{description}</p>
                <div className="add-dish" >
                    <div className="inc-dec">
                        <img className="symbol" onClick={decrement} src="https://cdn-icons-png.flaticon.com/512/929/929430.png"/>
                        {dish_count}
                        <img className="symbol" onClick={increment} src="https://cdn-icons-png.flaticon.com/512/7131/7131300.png"/>
                    </div>
                </div>
            </div>

            <div >
                {imageId&&<img src={url+imageId} alt="image unavailable" className="item-img"/>}
            </div>


        </div>

    )
}

export default RestaurantItem