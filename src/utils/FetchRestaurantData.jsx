import { swiggyRestaurants } from "../constant";
import { setLocation } from "./locationSlice";
import { setRestaurants } from "./restaurantsSlice";
import axios from "axios";

export const fetchRestaurantData = async (dispatch, coordinates) => {
  const url = `${swiggyRestaurants}lat=${coordinates.latitude}&lng=${coordinates.longitude}`;
  try {
    // const response = await fetch(url);
    // const json = await response.json();
    const response = await axios.get(url);
    const json = await response.data;
    const allCardData = json?.data?.cards;
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

export const fetchUserLocationRestaurants = (dispatch) => {
  // const [restaurantCardData, setRestaurantCardData] = React.useState([]);

  const getLocationAndFetchData = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => handleLocationSuccess(pos),
      () => handleLocationError(),
      options
    );
  };

  const handleLocationSuccess = (pos) => {
    const coordinates = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    };
    console.log(coordinates);

    fetchRestaurantData(dispatch, coordinates);
  };

  const handleLocationError = () => {
    console.error("Location access denied");
  };

  getLocationAndFetchData();
};

export const fetchInitialRestaurantData = (dispatch) => {
  const defaultCoordinates = {
    latitude: 12.9352,
    longitude: 77.6245,
    city: "Koramangala, Bangalore",
  };
  dispatch(setLocation(defaultCoordinates));
  fetchRestaurantData(dispatch, defaultCoordinates);
};
