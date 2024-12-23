import { swiggyRestaurants } from "../constant";
import { setLocation } from "./locationSlice";
import { setRestaurants,addRestaurants } from "./restaurantsSlice";
import axios from "axios";

export const fetchRestaurantData = async (dispatch, coordinates,setLoading) => {
  const url = "https://food-point-backend.onrender.com/api/rlist";
  const postBody = { latitude: coordinates.latitude, longitude: coordinates.longitude };
  try {
    const response = await axios.post(url, postBody);
    const json = await response.data;
    const allCardData = json?.data?.cards;
    // 2 ways this block of code will run 1 default fetch and other is user location rest fetch when user loc fetch at that time user will pass loading state setter fn defalt case no setter fn hence loading will not be set and will be undefined hence if check is there
    if(setLoading)
      setLoading(false);
    const citySlug = allCardData[allCardData.length - 1].card.card.citySlug;
    coordinates.city = citySlug;
    if (!allCardData) {
      // setRestaurantCardData(undefined);
      dispatch(setRestaurants(undefined));
      return;
    }

    const allowedIds = [
      "whats_on_your_mind",
      "top_brands_for_you",
      "popular_restaurants_title",
      "restaurant_grid_listing",
    ];

    // Filter cards based on allowed IDs
    const filteredCards = allCardData.filter((cardData) =>
      allowedIds.includes(cardData.card.card.id)
    );

    // Extract restaurants if available from `restaurant_grid_listing`
    const restaurantGridCard = filteredCards.find(
      (cardData) => cardData.card.card.id === "restaurant_grid_listing"
    );
    const restaurantData =
      restaurantGridCard?.card.card.gridElements.infoWithStyle.restaurants ||
      [];

    // Map through filteredCards to insert `restaurants` only in `popular_restaurants_title`
    const updatedCardData = filteredCards.map((cardData) => {
      if (cardData.card.card.id === "popular_restaurants_title") {
        return {
          ...cardData,
          card: {
            ...cardData.card,
            card: {
              ...cardData.card.card,
              restaurants: restaurantData,
            },
          },
        };
      }
      return cardData;
    });

    // Final filtered set without `restaurant_grid_listing`
    const updatedCardData2 = updatedCardData.filter((cardData) =>
      [
        "whats_on_your_mind",
        "top_brands_for_you",
        "popular_restaurants_title",
      ].includes(cardData.card.card.id)
    );
    // setRestaurantCardData(updatedCardData2);
    dispatch(setRestaurants(updatedCardData2));
    dispatch(setLocation(coordinates));
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    // setRestaurantCardData(undefined);/
    dispatch(setRestaurants(undefined));
  }
};

export const fetchUserLocationRestaurants = (dispatch,setLoading) => {
  // const [restaurantCardData, setRestaurantCardData] = React.useState([]);

  const getLocationAndFetchData = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => handleLocationSuccess(pos,setLoading),
      () => handleLocationError(),
      options
    );
  };

  const handleLocationSuccess = (pos) => {
    const coordinates = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    };
    // console.log(coordinates);

    fetchRestaurantData(dispatch, coordinates,setLoading);
  };

  const handleLocationError = () => {
    console.error("Location access denied");
  };

  getLocationAndFetchData();
};

export const fetchMoreRestaurants = async (
  dispatch,
  restaurantsLength,
  location
) => {
  const url = "https://food-point-backend.onrender.com/api/fetchMoreRestaurants";
  const postBody = {
    lat: location.latitude,
    lng: location.longitude,
    restaurantsLength: restaurantsLength,
  };
  // console.log(postBody);
  try {
    const response = await axios.post(url, postBody);
    const data = response.data;
    // console.log(data)
    dispatch(addRestaurants(data));
  } catch (error) {
    console.error("Error fetching more restaurant data:", error);
  }
};
export const fetchInitialRestaurantData = (dispatch) => {
  const defaultCoordinates = {
    latitude: 28.7041,
    longitude: 77.1025,
  };

  fetchRestaurantData(dispatch, defaultCoordinates);
};
