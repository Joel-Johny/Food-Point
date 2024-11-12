import React, { useContext } from "react";
import "./ToggleButton.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeContext from "../../utils/ThemeContext";

const ToggleButton = ({ hamburgerIsOpen, toggleHamburger ,data}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // In case of big screens there is no ham
  if (hamburgerIsOpen == undefined) {
    return (
      <label
        className={`toggle-switch ${
          theme === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme} // or remove if `onClick` on label handles it
        />
        <span className="slider">
          {theme === "light" ? (
            <LightModeIcon sx={{ fontSize: "18px" }} />
          ) : (
            <DarkModeIcon sx={{ fontSize: "18px" }} />
          )}
        </span>
      </label>
    );
  } else {
    return (
      <li
        onClick={() => {
          toggleHamburger();
          toggleTheme();
        }}
      >
        {theme == "light" ? "Swith to Dark Mode" : "Switch to Light Mode"}
      </li>
    );
  }
};

export default ToggleButton;
