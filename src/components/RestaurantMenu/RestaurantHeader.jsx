import React, { useContext } from "react";
import "./RestHeader.css";
import Skeleton from "react-loading-skeleton";
import { url } from "../../constant";
import { useThemeContext } from "../../utils/ThemeContext";
const RestaurantHeader = ({ rDetails }) => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  return (
    <div className="rest-header">
      <h2>{rDetails.name}</h2>
      <div className="rest-details">
        <div>
          <div className="sla">
            {rDetails.avgRating && (
              <>
                <h4>{rDetails.avgRating}⭐</h4>
                <h4>({rDetails.totalRatingsString})</h4>
              </>
            )}
          </div>
          <div className="cuisines">
            <h4>{rDetails.cuisines.join(", ")}</h4>
          </div>
          <div className="cuisines">
            <h4>{rDetails.costForTwoMessage}</h4>
          </div>
          <div className="outlet-location">
            <img src="/outlet.png" alt="outlet" className="img-icon" />
            <h4>{rDetails.areaName}</h4>
          </div>
          <div className="outlet-location">
            <img src="/clock.png" alt="outlet" className="img-icon" />
            <h4>30-35mins</h4>
          </div>
        </div>

        <div className="rest-img-container">
          <img
            src={url + rDetails.cloudinaryImageId}
            alt=""
            className="rest-img"
          />
        </div>
      </div>
    </div>
  );
};

export const RestaurantHeaderShimmer = () => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'

  return (
    <div className="rest-header">
      <Skeleton width={250} height={30} />
      <div className="rest-details">
        <div>
          <div className="sla">
            <Skeleton height={20} width={150} />
          </div>
          <div className="cuisines">
            <Skeleton height={20} width={120} />
          </div>
          <div className="cuisines">
            <Skeleton height={20} width={120} />
          </div>
          <div className="outlet-location">
            <Skeleton height={20} width={120} />
          </div>
          <div className="outlet-location">
            <Skeleton height={20} width={120} />
          </div>
        </div>
        <div className="rest-img-container-shimmer">
          <Skeleton width={200} height={170} className="rest-img" />
        </div>
      </div>
    </div>
  );
};
export default RestaurantHeader;
