import React from "react";
import "./RestaurantListing.css";
import { imageUrl } from "../../constant";
import StarIcon from "@mui/icons-material/Star";
import Skeleton from "react-loading-skeleton";

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

const RestaurnatCardShimmer = () => {
  return (
    <div
      className="restaurant-card restaurant-card-grid "
    >
      <div>
        <Skeleton className="rest-img" />
      </div>
      <div className="rest-description">
        <div className="rest-name">
          <label>
            <Skeleton width={250} />
          </label>
        </div>
        <div className="rest-cuisines">
          <label>
            <Skeleton width={180} />
          </label>
        </div>
        <div className="rest-cuisines">
          <label>
            <Skeleton width={150} />
          </label>
        </div>
      </div>
    </div>
  );
};
const RestaurantListing = ({ restaurantData }) => {
  const header = restaurantData?.card?.card?.title;
  const restaurantsList = restaurantData?.card?.card?.restaurants;
  return (
    <div>
      <h3>{header ? header : "Restaurants with online food delivery "}</h3>
      <div className="restaurants-grid">
        {restaurantsList?.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
        <RestaurnatCardShimmer />
        <RestaurnatCardShimmer />
        <RestaurnatCardShimmer />
      </div>
    </div>
  );
};

export default RestaurantListing;
