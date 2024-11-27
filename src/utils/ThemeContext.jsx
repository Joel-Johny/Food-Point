import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  function toggleTheme() {
    const themeToSet= theme == "light" ? "dark" : "light";
    setTheme(themeToSet);
    localStorage.setItem("theme", themeToSet); // Save to localStorage
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme; // Use saved theme
    } else {
      // Fallback to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);

export default ThemeContext;
