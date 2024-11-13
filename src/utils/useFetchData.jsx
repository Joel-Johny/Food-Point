import { swiggyRestaurants } from "../constant";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "./cartSlice";
import axios
 from "axios";
const useFetchData = () => {
  const [restaurantCardData, setRestaurantCardData] = React.useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getLocationAndFetchData();
  }, []);

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
    dispatch(setLocation(coordinates));
    fetchRestaurantData(coordinates);
  };

  const handleLocationError = () => {
    const defaultCoordinates = { latitude: 13.04051, longitude: 77.62466 };
    dispatch(setLocation(defaultCoordinates));
    fetchRestaurantData(defaultCoordinates);
  };

  const fetchRestaurantData = async (coordinates) => {
    const url = `${swiggyRestaurants}lat=${coordinates.latitude}&lng=${coordinates.longitude}`;
    try {
      // const response = await fetch(url);
      // const json = await response.json();
      const response = await axios.get(url);
      const json = await response.data;
      const allCardData = json?.data?.cards;
      if (!allCardData) {
        setRestaurantCardData(undefined);
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
      setRestaurantCardData(
        updatedCardData.filter((cardData) =>
          [
            "whats_on_your_mind",
            "top_brands_for_you",
            "popular_restaurants_title",
          ].includes(cardData.card.card.id)
        )
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setRestaurantCardData(undefined);
    }
  };

  return [restaurantCardData];
};

export default useFetchData;
