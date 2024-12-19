import { swiggyRestMenu } from "../constant";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const useRestaurant = (resId) => {
  const [rMenu, setRMenu] = React.useState([]);
  const [filteredMenu, setfilteredMenu] = React.useState([]);
  const [rDetails, setRDetails] = React.useState([]);
  const coordinates = useSelector((store) => {
    return store.location;
  });
  const param = useParams();

  useEffect(() => {
    fetchMenu();
    // NOW EACH TIME THE URL'S ID CHANGES IT WILL FETCH MENU
  }, [param.id]);

  const fetchMenu = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([coordinates, resId]),
    };

    const data = await fetch(
      // `https://food-point-backend.onrender.com/api/menu`,
      `http://localhost:1234/api/menu`,
      options
    );
    const json = await data.json();
    // The last card is grouped card which will have all the dishes of the restaurant
    const length = json.data.cards.length - 1;
    const restaurantMenu =
      json.data.cards[length].groupedCard.cardGroupMap.REGULAR.cards;
    // console.log("FM NOW")
    const restaurantDetailsArray = json.data.cards.filter((card) => {
      return card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
    })
    const restaurantDetails=restaurantDetailsArray[0].card.card.info;
    console.log(json,restaurantDetails);
    setRMenu(restaurantMenu);
    setfilteredMenu(restaurantMenu);
    setRDetails(restaurantDetails);
  };
  return [rDetails, rMenu, filteredMenu, setfilteredMenu];
};

export default useRestaurant;
