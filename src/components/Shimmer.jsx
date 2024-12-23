import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DishItemsSkeleton } from "./DishItems/DishItems";
import { RestaurantCardSliderSkeleton } from "./RestaurantCardSlider/RestaurantCardSlider";
import { RestaurantListingSkeleton } from "./RestaurantListing/RestaurantListing";

export default function Shimmer() {
  return (
    <>
      <div className="location-button">
        <p>
          Location : 
          <Skeleton width={100} height={20} />
        </p>

        <button className="button">Get current location</button>
      </div>
      <DishItemsSkeleton />
      <RestaurantCardSliderSkeleton />
      <RestaurantListingSkeleton />
    </>
  );
}
