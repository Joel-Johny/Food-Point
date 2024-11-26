import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DishItemsSkeleton } from "./DishItems/DishItems";

export default function Shimmer() {
  return <DishItemsSkeleton />;
}
