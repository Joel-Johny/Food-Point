import React from "react";
import "./RestaurantListing.css";
import { imageUrl } from "../../constant";
import StarIcon from "@mui/icons-material/Star";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  // console.log(restaurant);
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
            <label>
              {restaurant.info.name.length > 20
                ? `${restaurant.info.name.slice(0, 18)}...`
                : restaurant.info.name}
            </label>
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

const RestaurantCardShimmer = () => {
  return (
    <div className="restaurant-card restaurant-card-grid ">
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
const RestaurantListing = ({ restaurantData, headerText, resList }) => {
  const header = headerText ? headerText : restaurantData?.card?.card?.title;
  const restaurantsList = resList
    ? resList
    : restaurantData?.card?.card?.restaurants;
  // console.log(restaurantData);
  return (
    <div className="restaurants-listing-container">
      <h3>{header ? header : "Restaurants with online food delivery "}</h3>
      <div className="restaurants-grid">
        {restaurantsList?.map((restaurant, index) => {
          return (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={index}
              className="rest-listing-link"
            >
              <RestaurantCard key={index} restaurant={restaurant} />
            </Link>
          );
        })}
        {headerText ? (
          <></>
        ) : (
          <>
            <Link to="#">
              <RestaurantCardShimmer />
            </Link>
            <Link to="#">
              <RestaurantCardShimmer />
            </Link>
            <Link to="#">
              <RestaurantCardShimmer />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export const RestaurantListingSkeleton = () => {
  return (
    <div>
      <h3>Restaurants with online food delivery </h3>
      <div className="restaurants-grid">
        {Array(10)
          .fill(0)
          ?.map((val, index) => (
            <Link to="#" key={index}>
              <RestaurantCardShimmer />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default RestaurantListing;
