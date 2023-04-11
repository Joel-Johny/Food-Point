import React,{useEffect,useState} from "react"
import { url } from "../constant"
import { useParams } from "react-router-dom"
import MenuShimmer from "./MenuShimmer"
import useRestaurants from "../utils/useRestaurants"

const RestaurantMenu=()=>{
    const param=useParams()
    const [menuDetails,rDetails]=useRestaurants(param.id)


 
    if (!menuDetails)
        return(
            <div className="sorry">
             <h1 className="fetchError">Sorry! There was some error fetching the data you can go back and try searching for other restaurants.</h1>
             <img className="sorry-img" src="https://media.istockphoto.com/id/1266144552/vector/emoticon-with-sorry-sign.jpg?s=1024x1024&w=is&k=20&c=bqNENovXxeVCUucdZ6tKj9P-JcaIz8z8wVJEjil2ZmY="/>
             </div>
             )
       menuDetails.map((menuItem,index)=>{
        const {card}=menuItem
        console.log(card.info)
        return
    })
    return ( Object.keys(menuDetails).length === 0)
    ?<MenuShimmer />
    :(  <>
        <div className="restaurant">
            
            <div className="rest-details">
                <img src={url+rDetails.cloudinaryImageId} className="r-image"/>
                <div>
                    <div className="label">
                        <h1>{rDetails.name}</h1>
                        {rDetails.avgRating && <h2>{rDetails.avgRating}⭐</h2>}
                    </div>

                    <h2>{rDetails.city}</h2>
                    <h2>{rDetails.costForTwoMessage}</h2>        

                </div>
            </div>


        </div>
        </>
    )
}

export default RestaurantMenu