import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { RestaurantHeaderShimmer } from "./RestaurantHeader";
const MenuShimmer = () => {
  return (
    <div className="rest-menu">
      <RestaurantHeaderShimmer />
    </div>
  );
};

export default MenuShimmer;
