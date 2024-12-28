import React from "react";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useThemeContext } from "../utils/ThemeContext";

const DeleteCart = ({ setter }) => {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();

  const handleYes = () => {
    dispatch(clearCart());
    setter(false);
  };
  const handleNo = () => {
    setter(false);
  };
  return (
    <div className={`delete ${theme}`}>
      <h2>Delete all items in your cart?</h2>
      <div className="decision">
        <div className="no" onClick={handleNo}>
          NO
        </div>
        <div className="yes" onClick={handleYes}>
          YES
        </div>
      </div>
    </div>
  );
};

export default DeleteCart;
