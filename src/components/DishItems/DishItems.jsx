import React from "react";
import "./Dishitems.css";
import { imageUrl } from "../../constant";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const DishItem = ({ dish }) => {
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
      left: 250,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    document.querySelector(".dishes-container").scrollBy({
      left: -250,
      behavior: "smooth",
    });
  }
  return (
    <div className="dishes">
      <h3>{header ? header : "Whats on your mind ??"}</h3>
      <div className="vh-flex-center">
        <NavigateBeforeIcon onClick={scrollLeft} className="prev-arrow" />
        <div className="dishes-container">
          {dishesList?.map((dish, index) => (
            <DishItem dish={dish} key={dish.id} />
          ))}
        </div>
        <NavigateNextIcon className="next-arrow" onClick={scrollRight} />
      </div>
    </div>
  );
};
export default DishItems;
