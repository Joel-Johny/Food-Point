import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import AccordianDemo from './components/AccordianDemo'
import { Provider } from "react-redux";
import store from "./utils/store";
import CartRedux from "./components/CartRedux";
import SearchRestaurants from "./components/SearchRestaurants/SearchRestaurants";
import { ThemeProvider } from "./utils/ThemeContext";
// import About2Class from './components/About2Class'
// import About2Function from './components/About2Function'
import { useThemeContext } from "./utils/ThemeContext";

const AppLayout = () => {
  // Access the theme value from context
  const { theme } = useThemeContext(); // Assuming theme is either 'light' or 'dark'

  return (
    <div className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "about2class",
      //   element: <About2Class />
      // },
      // {
      //   path: "about2function",
      //   element: <About2Function />
      // },
      // {
      //   path: "accordian",
      //   element: <AccordianDemo />,  // Main element for /accordian
      //   children: [
      //     {
      //       path: "about",  // Nested route under /accordian/about
      //       element: <About />
      //     }
      //   ]
      // },
      {
        path: "cartRedux",
        element: <CartRedux />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/search-restaurant",
        element: <SearchRestaurants />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </ThemeProvider>
);
// children and outlet if were not there :---

// {
//   path:"/about",
//   element:(<><Header/>
//           <About/>
//           <Footer/>
//           </>)

// },
//   {
//   path:"/contact",
//   element:(<><Header/>
//   <Contact/>
//   <Footer/>
//   </>)

// }
