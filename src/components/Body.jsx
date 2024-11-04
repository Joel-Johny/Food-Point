import React from "react"
import Card,{PromotedRestaurant} from "./Card"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useFetchData from "../utils/useFetchData"
import useOnline from "../utils/useOnline"


export default function Body(){

    const [search,setSearch]=React.useState("")
    const [show,setShow]=React.useState(false)
    const [filteredRestaurants,setFilteredRestaurants,allRestaurants,setAllRestaurants]=useFetchData()  //SEE THIS VERY IMP
    const PromotedRestaurantCard = PromotedRestaurant(Card)
    function toggleShow(){
        setShow(true)
    }
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
    if(allRestaurants==undefined){
        return(
            <div>
                <h1 style={{textAlign:"center",margin:"auto",marginTop:"5%"}}>No restaurants at the moment please come back after sometime!</h1>
            </div>
        )
    }

    return(
        (allRestaurants.length===0)
        ?(<>
            <div className="restaurant-list ">
                <Shimmer/>
            </div>
        </>
        )
        :
        <main className="main">
            <div className="search-container">
                {(show)
                ?<input type="text" placeholder="SEARCH" className="menu-search" value={search} onChange={searchUpdate}/>
                :<img onClick={toggleShow} src="/search.png" style={{height:'70px',width:'70px', cursor:"pointer"}}/>
            }
            </div>

            <div className="restaurant-list">
            {    

            
                (filteredRestaurants.length>0)
                  ?(filteredRestaurants.map((restaurant,index)=>{
                    return (
                        <Link to={"/restaurant/"+restaurant.info.id}>
                            {restaurant.info?.promoted===true?<PromotedRestaurantCard {...restaurant.info} key={index}/>:<Card {...restaurant.info} key={index}/>}
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