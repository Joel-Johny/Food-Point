import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DishItemsSkeleton } from "./DishItems/DishItems";
import { RestaurantCardSliderSkeleton } from "./RestaurantCardSlider/RestaurantCardSlider";
import { RestaurantListingSkeleton } from "./RestaurantListing/RestaurantListing";

export default function Shimmer() {
  return (
    <>
      <DishItemsSkeleton />
      <RestaurantCardSliderSkeleton />
      <RestaurantListingSkeleton/>
    </>
  );
}
