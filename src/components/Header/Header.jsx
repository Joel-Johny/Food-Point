import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useThemeContext } from "../../utils/ThemeContext";
import ToggleButton from "./ToggleButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function Header() {
  const { theme } = useThemeContext();
  const cartCount = useSelector((store) => {
    return store.cart.total;
  });
  const [hamburgerIsOpen, setHamburgerIsOpen] = React.useState(false);
  console.log(hamburgerIsOpen);
  function toggleHamburger() {
    setHamburgerIsOpen((old) => {
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
                <img src="/logo2.png" alt="somelogo" />
                <h1 htmlFor="title">Food-Point</h1>
              </div>
            </NavLink>

            <div className="nav-items">
              <div className="mobile-nav-items vh-flex-center">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <NavLink to="/cartRedux">
                      <div className="cartIconContainer vh-flex-center">
                        <ShoppingCartOutlinedIcon />
                        <div className="cartItemCount">
                          <span>{cartCount}</span>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                </ul>

                <div className={`hamburger`} onClick={toggleHamburger}>
                  <div
                    className={`bar ${hamburgerIsOpen ? "bar1" : ""} ${
                      theme == "light" ? "light-ham" : "dark-ham"
                    }`}
                  />
                  <div
                    className={`bar ${hamburgerIsOpen ? "bar2" : ""} ${
                      theme == "light" ? "light-ham" : "dark-ham"
                    }`}
                  />
                  <div
                    className={`bar ${hamburgerIsOpen ? "bar3" : ""} ${
                      theme == "light" ? "light-ham" : "dark-ham"
                    }`}
                  />
                </div>
              </div>

              <ul className="pc-nav-items">
                <ToggleButton />
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/cartRedux">
                    <div className="cartIconContainer vh-flex-center">
                      <ShoppingCartOutlinedIcon />
                      <span>Cart</span>
                      <div className="cartItemCount">
                        <span>{cartCount}</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {hamburgerIsOpen ? (
            <ul className={`expand-nav-items ${hamburgerIsOpen ? "show" : ""}`}>
              <ToggleButton
                hamburgerIsOpen={hamburgerIsOpen}
                toggleHamburger={toggleHamburger}
              />
              <li onClick={toggleHamburger}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={toggleHamburger}>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}
