import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.css";
import {useThemeContext} from "../../utils/ThemeContext";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const {theme} = useThemeContext;
  const cartCount = useSelector((store) => {
    return store.cart.total;
  });
  const [hamvis, setHamvis] = React.useState(true);
  function toggleTox() {
    document.getElementsByClassName("expand")[0].classList.add("show");
    setHamvis((old) => {
      return !old;
    });
  }
  function toggleToH() {
    document.getElementsByClassName("expand")[0].classList.remove("show");
    setHamvis((old) => {
      return !old;
    });
  }
  return (
    <>
      <header className="h-flex-center shadow">
        <div className="mainContianer">
          <div className="header">
            <NavLink to="/">
              <div className="logo">
                <img id="title" src="/logo.jpg" alt="some logo" />
                <h1 htmlFor="title">Food-Point</h1>
              </div>
            </NavLink>

            <div className="nav-items">
              <div className="mobile-nav-items">
                <ul style={{ listStyle: "none" }}>
                  <li>
                  <NavLink to="/cartRedux">
                    <div className="cartIconContainer vh-flex-center">
                      <img className="cartIcon" src="/cart.png" alt="cart" />
                      <span>Cart</span>
                      <div className="cartItemCount">
                        <span>{cartCount}</span>
                      </div>
                    </div>
                  </NavLink>
                  </li>
                </ul>

                {hamvis && (
                  <div className="hamburger" onClick={toggleTox}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                )}
                {!hamvis && (
                  <img
                    onClick={toggleToH}
                    style={{ height: "20px", width: "20px" }}
                    src="/cross.png"
                  />
                )}
              </div>

              <ul className="pc-nav-items">
                
                <ToggleButton/>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/cartRedux">
                    <div className="cartIconContainer vh-flex-center">
                      <img className="cartIcon" src="/cart.png" alt="cart" />
                      <span>Cart</span>
                      <div className="cartItemCount">
                        <span >{cartCount}</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="expand">
            <ul className="expand-nav-items">
              <li onClick={toggleToH}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={toggleToH}>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
