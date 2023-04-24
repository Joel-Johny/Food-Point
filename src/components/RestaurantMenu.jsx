import React,{useEffect,useState} from "react"
import { url } from "../constant"
import { useParams } from "react-router-dom"
import MenuShimmer from "./MenuShimmer"
import useRestaurants from "../utils/useRestaurants"
import RestaurantItem from "./RestaurantItem"
import RestConflict from "./RestConflict"
import { useSelector } from "react-redux"

const RestaurantMenu=()=>{
    const param=useParams()
    const [menuDetails,rDetails,filteredMenu,setfilteredMenu]=useRestaurants(param.id)
    const [searchTxt,setSearchTxt]=useState("")
    const conflict=useSelector((store)=>{
        return store.cart.conflict
    })
    function searchDish(e){
        setSearchTxt(e.target.value)
        const result=filterMenu(e.target.value)
        setfilteredMenu(result)
    }

    function filterMenu(search){
        const searchL=search.toLowerCase()
        const result=menuDetails.filter((menuItem,index)=>{
            const nameL=menuItem.card.info.name.toLowerCase()
            return nameL.includes(searchL)
        })
        return result
    }
 
    if (!menuDetails)
        return(
            <div className="sorry">
             <h1 className="fetchError">Sorry! There was some error fetching the data you can go back and try searching for other restaurants.</h1>
             <img className="sorry-img" src="https://media.istockphoto.com/id/1266144552/vector/emoticon-with-sorry-sign.jpg?s=1024x1024&w=is&k=20&c=bqNENovXxeVCUucdZ6tKj9P-JcaIz8z8wVJEjil2ZmY="/>
             </div>
             )

    const dishes=filteredMenu.map((menuItem,index)=>{

        return(
            <RestaurantItem details={menuItem.card.info} rname={rDetails.name} r_id={rDetails.id} key={index}/>
        )
    })

    return ( Object.keys(menuDetails).length === 0)
    ?<MenuShimmer />
    :(  <>
        <div className={`restaurant ${conflict ? 'opacity' : ''}`}>
            
            <div className="rest-details">
                <img src={url+rDetails.cloudinaryImageId} className="r-image"/>
                <div className="r-info">
                    <div className="label">
                        <h1>{rDetails.name}</h1>
                        {rDetails.avgRating && <h2>{rDetails.avgRating}⭐</h2>}
                    </div>

                    <h2>{rDetails.city}</h2>
                    <h2>{rDetails.costForTwoMessage}</h2>        

                </div>
            </div>
            <h1 className="recommend">{rDetails.name} Recommended Dishes </h1>

            <input className="menu-search" onChange={searchDish} value={searchTxt} placeholder="SEARCH DISHES"/>
            <div className="rest-menu">

                {filteredMenu.length>0?dishes:<h1>No dishes matched your query! Try again</h1>}

            </div>




        </div>
        <div className="rest-menu">
        {conflict && <RestConflict rname={rDetails.name} r_id={rDetails.id}/>}
        </div>

        </>
    )
}

export default RestaurantMenu