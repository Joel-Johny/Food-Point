import React, { useEffect, useState } from "react";
import { url } from "../../constant";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurants from "../../utils/useRestaurants";
import RestaurantBody from "./RestaurantBody";
import RestaurantHeader from "./RestaurantHeader";
import RestConflict from "./RestConflict";
import { useSelector } from "react-redux";
import "./RestMenu.css";
const RestaurantMenu = () => {
  const param = useParams();
  const [rDetails, menuDetails, filteredMenu, setfilteredMenu] = useRestaurants(
    param.id
  );
  const [show, setShow] = React.useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const conflict = useSelector((store) => {
    return store.cart.conflict;
  });
  function toggleShow() {
    setShow(true);
  }
  function searchDish(e) {
    setSearchTxt(e.target.value);
    const result = filterMenu(e.target.value);
    setfilteredMenu(result);
  }

  function filterMenu(search) {
    const searchL = search.toLowerCase();
    const result = menuDetails.filter((menuItem, index) => {
      const nameL = menuItem.card.info.name.toLowerCase();
      return nameL.includes(searchL);
    });
    return result;
  }

  if (!menuDetails)
    return (
      <div className="sorry">
        <h1 className="fetchError">
          Sorry! There was some error fetching the data you can go back and try
          searching for other restaurants.
        </h1>
        <img
          className="sorry-img"
          src="https://media.istockphoto.com/id/1266144552/vector/emoticon-with-sorry-sign.jpg?s=1024x1024&w=is&k=20&c=bqNENovXxeVCUucdZ6tKj9P-JcaIz8z8wVJEjil2ZmY="
        />
      </div>
    );

  // const dishes=filteredMenu.map((menuItem,index)=>{
  //     return(
  //         <RestaurantItem details={menuItem.card.info} rname={rDetails.name} r_id={rDetails.id} key={index}/>
  //     )
  // })

  return Object.keys(menuDetails).length === 0 ? (
    <div className={`restaurant ${conflict ? "opacity" : ""}`}>
      <MenuShimmer />
    </div>
  ) : (
    <>
      <div className={`restaurant ${conflict ? "opacity" : ""}`}>
        {/* <div className="rest-details">
          <img src={url + rDetails.cloudinaryImageId} className="r-image" />
          <div className="r-info">
            <div className="label">
              <h1>{rDetails.name}</h1>
              {rDetails.avgRating && <h2>{rDetails.avgRating}⭐</h2>}
            </div>

            <h2>{rDetails.city}</h2>
            <h2>{rDetails.costForTwoMessage}</h2>
          </div>
        </div> */}
        {/* <div className="search-container">
          {show ? (
            <input
              type="text"
              placeholder="SEARCH"
              className="menu-search"
              onChange={searchDish}
              value={searchTxt}
            />
          ) : (
            <img
              onClick={toggleShow}
              src="/search.png"
              style={{ height: "70px", width: "70px", cursor: "pointer" }}
            />
          )}
        </div> */}

        <div className="rest-menu">
          <RestaurantHeader rDetails={rDetails} />
          {filteredMenu.length > 0 ? (
            <RestaurantBody
              filteredMenu={filteredMenu}
              rDetails={rDetails}
              menuDetails={menuDetails}
              setfilteredMenu={setfilteredMenu}
            />
          ) : (
            <h1>No dishes matched your query! Try again</h1>
          )}
        </div>
      </div>

      <div className="h-flex-center">
        {conflict && <RestConflict rname={rDetails.name} r_id={rDetails.id} />}
      </div>
    </>
  );
};

export default RestaurantMenu;
