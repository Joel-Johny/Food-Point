import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./RestaurantDish.css";
import { useSelector } from "react-redux";
import RestaurantListing from "../RestaurantListing/RestaurantListing";
import axios from "axios";
import { RestaurantListingSkeleton } from "../RestaurantListing/RestaurantListing";

const RestaurantDish = () => {
  // Parse query parameters
  const [restaurantList, setRestaurantList] = useState([]);
  const { latitude, longitude } = useSelector((store) => {
    return store.location;
  });
  const query = new URLSearchParams(useLocation().search);
  const collectionId = query.get("collection_id");
  const tags = query.get("tags");
  const type = query.get("type");
  const headerText = query.get("header");

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const postBody = {
      latitude,
      longitude,
      collectionId,
      tags,
      type,
    };
    const response = await axios.post(
      "https://food-point-backend.onrender.com/api/dishRest",
      postBody
    );
    const resList = response.data?.cards?.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const updatedResList = resList.map((res) => {
      // console.log(res.card.card);
      return res.card.card;
    });
    setRestaurantList(updatedResList);
  }

  if (restaurantList.length === 0) {
    return (
      <div className="h-flex-center" style={{ marginTop: "40px" }}>
        <div className="mainContainer">
          <div className="restaurantList">
            <RestaurantListingSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-flex-center" style={{ marginTop: "40px" }}>
      <div className="mainContainer">
        <div className="restaurantList">
          <RestaurantListing
            headerText={
              "Restaurants with online food delivery for : " + headerText
            }
            resList={restaurantList}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDish;
