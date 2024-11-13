import React from 'react'

const RestaurantListing = ({restaurantData}) => {
  const header = restaurantData?.card?.card?.title
  // console.log(restaurantData?.card?.card?.title)
  return (
    <div>
     <h3>{header?header:"Restaurants with online food delivery "}</h3> 
    </div>
  )
}

export default RestaurantListing