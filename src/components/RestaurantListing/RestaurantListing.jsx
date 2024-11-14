import React from "react";
import "./RestaurantListing.css";
import { imageUrl } from "../../constant";
import StarIcon from "@mui/icons-material/Star";

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div className="restaurant-card restaurant-card-grid">
        <div>
        <img
          src={imageUrl + restaurant.info.cloudinaryImageId}
          className="rest-img"
        />
        </div>


        <div className="rest-description">
          <div className="rest-name">
            <label>{restaurant.info.name}</label>
            <div>
              <label className="vh-flex-center">
                {restaurant.info.avgRating}
                <StarIcon className="star-icon" />
              </label>
            </div>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.cuisines.slice(0, 2).join(",")}</label>
            <div>
              <label>{restaurant.info.costForTwo}</label>
            </div>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.locality}</label>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.sla.slaString}</label>
            <div>
              <label>{restaurant.info.sla.lastMileTravelString}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantListing = ({ restaurantData }) => {
  const header = restaurantData?.card?.card?.title;
  const restaurantsList = restaurantData?.card?.card?.restaurants;
  return (
    <div className="restaurants-listing ">
      <h3>{header ? header : "Restaurants with online food delivery "}</h3>
      <div className="vh-flex-center">
        <div className="restaurants-grid vh-flex-center">
          {restaurantsList?.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListing;
