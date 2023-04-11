import React from "react"
import Card from "./Card"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useFetchData from "../utils/useFetchData"
import useOnline from "../utils/useOnline"


export default function Body(){

    const [search,setSearch]=React.useState("")

    const [filteredRestaurants,setFilteredRestaurants,allRestaurants,setAllRestaurants]=useFetchData()  //SEE THIS VERY IMP
    

    function searchUpdate(e){
        setSearch((old)=>{ return e.target.value;})

        const data=filter(e.target.value)
        setFilteredRestaurants((old)=>{
            return data
        })
    }


    function filter(search){
        

        let filtered=allRestaurants.filter((restaurant,index)=>{
        const string_copy=restaurant.info.name.toLowerCase()
        const search_copy=search.toLowerCase()
            return string_copy.includes(search_copy)
            
            
        })
       


        return filtered
    }

    const online=useOnline()
    if(!online)
        return (
            <div>
                <h1>You are not connected to the internet</h1>
            </div>
        )

    return(
        (allRestaurants.length===0)
        ?<div className="restaurant-list margin">
            <Shimmer/>
        </div>
        :
        <main className="main">
            <div className="search-container">
                <input type="text" placeholder="SEARCH" className="search-txt" value={search} onChange={searchUpdate}/>
            </div>

            <div className="restaurant-list">
            {    

            
                (filteredRestaurants.length>0)
                  ?(filteredRestaurants.map((restaurant,index)=>{
                    return (
                        <Link to={"/restaurant/"+restaurant.info.id}>
                    <Card {...restaurant.info} key={index}/>
                        </Link>
                        
                    )
                }))
                :(<h1>No Restaurants found! please search again</h1>)


            }
                
            </div>

        </main>
    )
}

//the code will work as long as the swiggy api is returning restraunt data if t returns null or undefined code will break