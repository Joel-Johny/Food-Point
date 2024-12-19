import React, { useContext } from "react";
import "./RestHeader.css";
import { useThemeContext } from "../../utils/ThemeContext";
const RestaurantHeader = ({ rDetails }) => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  console.log(theme);
  return (
    <div className="rest-header">
      <h2>{rDetails.name}</h2>
      <div className="rest-details">
        <div className="sla">
          {rDetails.avgRating && <h4>{rDetails.avgRating}⭐</h4>}
          <h4>({rDetails.totalRatingsString})</h4>
          <h4>{rDetails.costForTwoMessage}</h4>
        </div>
        <div className="cuisines">
          <h4>{rDetails.cuisines.join(", ")}</h4>
        </div>
        <div className="outlet-location">
          <img src="/outlet.png" alt="outlet" className="img-icon" />
          <h4>{rDetails.areaName}</h4>
        </div>
        <div className="outlet-location">
          <img src="/clock.png" alt="outlet" className="img-icon" />
          <h4>30-35mins</h4>
        </div>
        <div className={`hbar ${theme}`}></div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
