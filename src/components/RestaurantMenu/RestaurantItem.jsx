import React, { useContext } from "react";
import { url } from "../../constant";
import { addItem, incrementItem, decrementItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../utils/ThemeContext";
import "./RestItem.css";
const RestaurantItem = ({ details, lastDish }) => {
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  const { name, isVeg, price, defaultPrice, imageId, description } = details;
  const nonveg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png";
  const veg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png";
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  let dish_count = 0;
  cartItems.forEach((object) => {
    if (name == object.name) dish_count = object.count;
  });
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(
      addItem({
        ...details,
        count: 1,
        // rname,
        // r_id: r_id,
      })
    );
  };
  const increment = () => {
    dispatch(
      incrementItem({
        name: name,
      })
    );
  };

  const decrement = () => {
    dispatch(
      decrementItem({
        name: name,
      })
    );
  };
  return (
    <>
      <div className="rest-item">
        <div className="item-info">
          {isVeg ? (
            <img src={veg} height={"25px"} width={"25px"} />
          ) : (
            <img src={nonveg} height={"25px"} width={"25px"} />
          )}
          <h2>{name}</h2>
          <h3>₹{price ? price / 100 : defaultPrice / 100} </h3>
          <p>{description}</p>

          <div className="add-dish">
            {dish_count == 0 ? (
              <div
                onClick={handleAddItem}
                style={{
                  cursor: "pointer",
                  width: `100%`,
                  textAlign: "center",
                }}
              >
                Add
              </div>
            ) : (
              <div className="inc-dec">
                <img
                  className="symbol"
                  onClick={decrement}
                  src="https://icon-library.com/images/minus-icon-png/minus-icon-png-14.jpg"
                />
                {dish_count}
                <img
                  className="symbol"
                  onClick={increment}
                  src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_1280.png"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          {imageId && (
            <img
              src={url + imageId}
              alt="image unavailable"
              className="item-img"
            />
          )}
        </div>
      </div>
      {!lastDish && <div className={`hbar ${theme}`}></div>}
    </>
  );
};

export const RestaurantAccordian = ({ details, lastCategory }) => {
  const [show, setShow] = React.useState(false);
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'
  const title = details?.title;
  const dishes = details?.itemCards;
  return (
    <>
      <div className="rest-item" onClick={() => setShow((prev) => !prev)}>
        <div>
          <h4>{`${title} (${dishes.length})`}</h4>
        </div>
        {show ? <h3>↑</h3> : <h3>↓</h3>}
      </div>
      {show && (
        <div>
          {dishes.map((dish, index) => (
            <RestaurantItem
              details={dish?.card?.info}
              lastDish={dishes.length - 1 == index}
            />
          ))}
        </div>
      )}
      {!lastCategory && <div className={`hbar ${theme}`}></div>}
    </>
  );
};
export default RestaurantItem;
