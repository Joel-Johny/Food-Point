import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DishItemsSkeleton } from "./DishItems/DishItems";
import { RestaurantCardSliderSkeleton } from "./RestaurantCardSlider/RestaurantCardSlider";

export default function Shimmer() {
  return (
    <>
      <DishItemsSkeleton />
      <RestaurantCardSliderSkeleton />
    </>
  );
}
