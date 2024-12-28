import React from "react";
import "./Dishitems.css";
import { imageUrl } from "../../constant";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const DishItem = ({ dish }) => {
  // console.log(dish);
  return (
    <>
      <div className="dish-item v-flexcol-center">
        <div className="img-wrapper">
          <img src={imageUrl + dish.imageId} className="dish-img" />
        </div>
        <label htmlFor="">{dish.action.text}</label>
      </div>
    </>
  );
};
const DishItems = ({ dishData }) => {
  const header = dishData?.card?.card?.header?.title;
  const dishesList = dishData?.card?.card?.imageGridCards?.info;
  function scrollRight() {
    document.querySelector(".dishes-container").scrollBy({
      left: 165,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    document.querySelector(".dishes-container").scrollBy({
      left: 165,
      behavior: "smooth",
    });
  }
  return (
    <div className="dishes">
      <h3>{header ? header : "Whats on your mind ??"}</h3>
      <div className="vh-flex-center">
        <NavigateBeforeIcon onClick={scrollLeft} className="prev-arrow" />
        <div className="dishes-container">
          {dishesList?.map((dish, index) => {
            const url = dish?.action?.link;
            const urlParams = new URL(url).searchParams;
            const collectionId = urlParams.get("collection_id");
            const tags = urlParams.get("tags");
            const type = urlParams.get("type");
            const header = dish?.action?.text;
            return (
              <Link
                key={index}
                className="rest-listing-link"
                to={`dish?collection_id=${collectionId}&tags=${tags}&type=${type}&header=${header}`}
              >
                <DishItem dish={dish} key={dish.id} />
              </Link>
            );
          })}
        </div>
        <NavigateNextIcon className="next-arrow" onClick={scrollRight} />
      </div>
    </div>
  );
};
const DishItemSkeleton2 = () => {
  return (
    <>
      <div className="dish-item v-flexcol-center">
        <div style={{ marginTop: "10px" }}>
          <Skeleton width={150} height={120} />
        </div>
        <Skeleton width={80} height={15} />
      </div>
    </>
  );
};
export const DishItemsSkeleton = () => {
  return (
    <div className="dishes">
      <h3>Whats on your mind ??</h3>
      <div className="vh-flex-center">
        <NavigateBeforeIcon className="prev-arrow" />
        <div className="dishes-container">
          {Array(15)
            .fill(0)
            .map((value, index) => (
              <DishItemSkeleton2 key={index} />
            ))}
        </div>
        <NavigateNextIcon className="next-arrow" />
      </div>
    </div>
  );
};
export default DishItems;
