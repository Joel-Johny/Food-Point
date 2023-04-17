import React from "react";
import { url } from "../constant";
const RestaurantItem=({details})=>{
    const {name,isVeg,price,defaultPrice,imageId,description}=details
    const nonveg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
    const veg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
    
    return(
        <div className="rest-item">
            <div className="item-info">
                {isVeg?<img src={veg} height={'25px'} width={'25px'}/>:<img src={nonveg}  height={'25px'} width={'25px'}/>}
                <h2>{name}</h2>
                <h3>₹{price?price/100:defaultPrice/100} </h3>
                <p>{description}</p>
            </div>

            <div >
                {imageId&&<img src={url+imageId} alt="image unavailable" className="item-img"/>}
            </div>


        </div>

    )
}

export default RestaurantItem