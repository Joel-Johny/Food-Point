import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {
  fetchInitialRestaurantData,
  fetchUserLocationRestaurants,
  fetchMoreRestaurants,
} from "../utils/FetchRestaurantData";
import useOnline from "../utils/useOnline";
import DishItems from "./DishItems/DishItems";
import RestaurantCardSlider from "./RestaurantCardSlider/RestaurantCardSlider";
import RestaurantListing from "./RestaurantListing/RestaurantListing";
import { useSelector, useDispatch } from "react-redux";
export default function Body() {
  // const [search, setSearch] = React.useState("");
  // const [show, setShow] = React.useState(false);
  // const [restaurantCardData] = useFetchData(); //SEE THIS VERY IMP
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

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

  const restaurantCardData = useSelector((store) => {
    return store.restaurants.items;
  });
  // console.log(restaurantCardData)
  const restaurantsLengthRef = React.useRef();
  useEffect(() => {
    restaurantsLengthRef.current =
      restaurantCardData[
        restaurantCardData.length - 1
      ]?.card?.card?.restaurants.length;
  }, [restaurantCardData]);

  const location = useSelector((store) => {
    return store.location;
  });

  const currentCity = location.city;

  const locationRef = React.useRef();
  useEffect(() => {
    locationRef.current = location;
  }, [location]);
  const handleScroll = () => {
    // console.log(restaurantsLength);
    const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position
    const scrollHeight = document.body.scrollHeight; // Total scrollable height of the document
    if (scrollPosition >= scrollHeight - 10) {
      // Threshold of 10px to account for precision errors
      // console.log(location);

      // console.log(locationRef.current, restaurantsLengthRef.current);
      loadMoreRestaurants();
    }
  };
  function loadMoreRestaurants() {
    fetchMoreRestaurants(
      dispatch,
      restaurantsLengthRef.current,
      locationRef.current
    );
  }
  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }
  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 50));
    if (restaurantCardData !== undefined && restaurantCardData.length === 0)
      fetchInitialRestaurantData(dispatch);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <div className="h-flex-center">
        <div className="mainContainer">
          <div className="restaurant-list">
            <Shimmer />
          </div>
        </div>
      </div>
    </>
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
          <div className="location-button">
            <p>
              Location :
              <b>{" " + currentCity[0].toUpperCase() + currentCity.slice(1)}</b>
            </p>

            <button
              className="button"
              onClick={() => {
                setLoading(true);
                fetchUserLocationRestaurants(dispatch, setLoading);
              }}
            >
              {loading ? "Loading..." : "Get current location"}
            </button>
          </div>
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
