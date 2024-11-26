import React from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import useOnline from "../utils/useOnline";
import DishItems from "./DishItems/DishItems";
import  RestaurantCardSlider from "./RestaurantCardSlider/RestaurantCardSlider";
import  RestaurantListing from "./RestaurantListing/RestaurantListing";
export default function Body() {
  // const [search, setSearch] = React.useState("");
  // const [show, setShow] = React.useState(false);
  const [restaurantCardData] = useFetchData(); //SEE THIS VERY IMP

  // ------Removing search input will make seperate component to search for restaurants-------

  // function toggleShow(){
  //     setShow(true)
  // }

  // function searchUpdate(e){
  //     setSearch((old)=>{ return e.target.value;})

  //     const data=filter(e.target.value)
  //     setFilteredRestaurants((old)=>{
  //         return data
  //     })
  // }

  // function filter(search){

  //     let filtered=allRestaurants.filter((restaurant,index)=>{
  //     const string_copy=restaurant.info.name.toLowerCase()
  //     const search_copy=search.toLowerCase()
  //         return string_copy.includes(search_copy)

  //     })

  //     return filtered
  // }

  // ------------------------------------------------------------------------------------------

  const online = useOnline();
  if (!online)
    return (
      <div>
        <h1>You are not connected to the internet</h1>
      </div>
    );
  if (restaurantCardData === undefined) {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "auto", marginTop: "5%" }}>
          No restaurants at the moment please come back after sometime!
        </h1>
      </div>
    );
  }

  return restaurantCardData.length === 0 ? (
    <>
    <div className="h-flex-center" >
      <div className="mainContainer">
        <div className="restaurant-list">
          <Shimmer />
        </div>
      </div>
    </div>    </>
  ) : (
    <div className="h-flex-center">
      <div className="mainContainer">
        {/* Commenting out search feature where we could search and filtr out restaurants after all rest we got in state */}
        {/* <div className="search-container">
                {(show)
                ?<input type="text" placeholder="SEARCH" className="menu-search" value={search} onChange={searchUpdate}/>
                :<img onClick={toggleShow} src="/search.png" style={{height:'70px',width:'70px', cursor:"pointer"}}/>
            }
            </div> */}

        <div className="restaurant-list">
          {restaurantCardData.map((restaurantCard) => {
            if (restaurantCard.card.card.id == "whats_on_your_mind")
              return (
                <DishItems
                  key={restaurantCard.card.card.id}
                  dishData={restaurantCard}
                />
              );
            else if (restaurantCard.card.card.id == "top_brands_for_you")
              return (
                <RestaurantCardSlider
                  key={restaurantCard.card.card.id}
                  restaurantData={restaurantCard}
                />
              );
            else
              return (
                <RestaurantListing
                  key={restaurantCard.card.card.id}
                  restaurantData={restaurantCard}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}

//the code will work as long as the swiggy api is returning restraunt data if t returns null or undefined code will break
