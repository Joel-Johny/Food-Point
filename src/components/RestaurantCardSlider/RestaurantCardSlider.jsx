import React from 'react'

const RestaurantCardSlider = ({restaurantData}) => {
  const header = restaurantData?.card?.card?.header?.title
  // console.log(restaurantData?.card?.card)
  return (
    <div>
     <h3>{header?header:"Top restaurant chains near you"}</h3> 
    </div>
  )
}

export default RestaurantCardSlider