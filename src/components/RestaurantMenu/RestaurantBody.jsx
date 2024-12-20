import React from "react";
import { useThemeContext } from "../../utils/ThemeContext";
import "./RestBody.css";
import { RestaurantAccordian } from "./RestaurantItem";
const RestaurantCategory = ({ menuItem }) => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  return (
    <>
      <RestaurantAccordian details={menuItem?.card?.card} lastCategory={true} />
      <div className={`category-partition ${theme}`}></div>
    </>
  );
};

const NestedRestaurantCategory = ({ menuItem }) => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  const categories = menuItem?.card?.card?.categories;
  return (
    <>
      <h4 style={{ marginLeft: "12px" }}>{menuItem?.card?.card?.title}</h4>
      {categories.map((category, index) => {
        return <RestaurantAccordian details={category} key={index} lastCategory={categories.length - 1 == index}/>;
      })}
      <div className={`category-partition ${theme}`}></div>
    </>
  );
};
const RestaurantBody = ({ filteredMenu, setfilteredMenu, menuDetails }) => {
  console.log(filteredMenu);

  return (
    <div className="rest-body">
      {filteredMenu.map((menuItem, index) => {
        return menuItem?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
          <RestaurantCategory menuItem={menuItem} key={index} />
        ) : (
          <NestedRestaurantCategory menuItem={menuItem} key={index} />
        );
      })}
    </div>
  );
};

export default RestaurantBody;
