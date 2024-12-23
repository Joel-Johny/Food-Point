import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import RestaurantItem from "./RestaurantMenu/RestaurantItem";
import DeleteCart from "./DeleteCart";
import { useNavigate } from "react-router-dom";
const CartRedux = () => {
  const navigate = useNavigate();

  const deleteAll = () => {
    setAlert(true);
  };
  const goHome = () => {
    navigate(`/`);
  };

  const goBack = () => {
    navigate(`/restaurant/` + r_id);
  };
  const [alert, setAlert] = React.useState(false);
  const { items, total, rname, r_id, totalBill } = useSelector((store) => {
    return store.cart;
  });
  const allCartItems = items.map((item, index) => {
    return <RestaurantItem details={item} key={index} />;
  });

  return (
    <>
      <div className={`h-flex-center ${alert} ? 'opacity' : 'crContainer'`}>
        <div className="rest-menu">
          {total > 0 ? (
            <>
              <h3 className="recommend">Your Cart Items from {rname}</h3>
              {allCartItems}
              <div className="bill-container">
                <big className="bill">
                  Your total bill amount is <strong> ₹{totalBill}</strong>
                </big>
              </div>
              <div className="buttons">
                <div className="see-rest" onClick={deleteAll}>
                  Empty Cart?
                </div>
                <div className="see-rest" onClick={goBack}>
                  Go back to Restaurant
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="empty">
                <img
                  src="./cart_empty.png"
                  className="cart-empty"
                />
                <h4>Your Cart is Empty</h4>
                <div className="see-rest" onClick={goHome}>
                  <label>SEE RESTAURANTS NEAR YOU</label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-flex-center">
        {alert && <DeleteCart setter={setAlert} />}
      </div>

    </>
  );
};

export default CartRedux;
