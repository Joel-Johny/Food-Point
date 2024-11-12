import React, { useContext } from "react";
import "./ToggleButton.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeContext from "../../utils/ThemeContext";

const ToggleButton = ({ hamburgerIsOpen, toggleHamburger }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (hamburgerIsOpen) {
    return (
      <li
        onClick={() => {
          toggleHamburger();
          toggleTheme();
        }}
      >
        {theme == "light" ? "Swith to Dark" : "Switch to Light"}
      </li>
    );
  }
  return (
    <label
      className={`toggle-switch ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        onClick={toggleTheme} // or remove if `onClick` on label handles it
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
};

export default ToggleButton;
