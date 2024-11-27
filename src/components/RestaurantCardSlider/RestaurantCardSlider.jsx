import React ,{useEffect} from "react";
import "./RestaurantCardSlider.css";
import { imageUrl } from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import {useThemeContext} from "../../utils/ThemeContext";
import Skeleton from "react-loading-skeleton";
const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div className="restaurant-card carousel">
        <img
          src={imageUrl + restaurant.info.cloudinaryImageId}
          className="rest-img img-carousel"
        />

        <div className="rest-description">
          <div className="rest-name">
            <label>{restaurant.info.name}</label>
            <div>
              <label className="vh-flex-center">
                {restaurant.info.avgRating}
                <StarIcon className="star-icon" />
              </label>
            </div>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.cuisines.slice(0, 2).join(",")}</label>
            <div>
              <label>{restaurant.info.costForTwo}</label>
            </div>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.locality}</label>
          </div>

          <div className="rest-cuisines">
            <label>{restaurant.info.sla.slaString}</label>
            <div>
              <label>{restaurant.info.sla.lastMileTravelString}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantCardSlider = ({ restaurantData }) => {
  const header = restaurantData?.card?.card?.header?.title;
  const {theme} = useThemeContext();
  const restaurantsList =
    restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  // console.log(restaurantsList);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const slickNext = document.querySelector('.slick-next');
    const slickPrev = document.querySelector('.slick-prev');
    if (theme === 'dark') {
      slickNext.classList.add('theme-dark');
      slickPrev.classList.add('theme-dark');
    } else {
      slickNext.classList.remove('theme-dark');
      slickPrev.classList.remove('theme-dark');
    }
  }, [theme]);
  return (
    <div className="restaurants-container">
      <h3>{header ? header : "Top restaurant chains near you."}</h3>
      <div className="slider-container">
        <Slider {...settings}>
          {restaurantsList?.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const RestaurantCardSkeleton = () => {
  return (
    <div className="restaurant-card carousel">
      <Skeleton className="rest-img img-carousel" />
      <div className="rest-description">
        <div className="rest-name">
          <label>
            <Skeleton width={250} />
          </label>
        </div>
        <div className="rest-cuisines">
          <label>
            <Skeleton width={180} />
          </label>
        </div>
        <div className="rest-cuisines">
          <label>
            <Skeleton width={150} />
          </label>
        </div>        
        <div className="rest-cuisines">
          <label>
            <Skeleton width={150} />
          </label>
        </div>
      </div>
    </div>
  );
}
export const RestaurantCardSliderSkeleton = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="restaurants-container">
      <h3>Top restaurant chains near you.</h3>
      <div className="slider-container">
        <Slider {...settings}>
          {Array(3)
            .fill(0)
            .map((value, index) => (
              <RestaurantCardSkeleton key={index} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
export default RestaurantCardSlider;
