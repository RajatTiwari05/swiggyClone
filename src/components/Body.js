import RestaurantCards, {withOneFreeDeliveryLabel} from "./RestaurantCards";
import FoodCard from "./FoodCard";
import NearMe from "./NearMe";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfrestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [foodTypeHeader, setFoodTypeHeader] = useState("");
  const [restaurantHeader, setRestaurantHeader] = useState("");
  const [nearMeRestaurant,setNearMeRestaurant] = useState([]);
  const [nearMeRestaurantTitle,setNearMeRestaurantTitle] = useState("");
  const [cuisinesNearMe,setCuisinesNearMe] = useState([]);
  const [cuisinesNearMeTitle,setCuisinesNearMeTitle] = useState("");
  const status = useOnlineStatus();
  const RestaurantCardOne = withOneFreeDeliveryLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5781805&lng=73.6836025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    
    setFoodType(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setNearMeRestaurant(jsonData?.data?.cards[6]?.card?.card?.brands);
    setCuisinesNearMe(jsonData?.data?.cards[7]?.card?.card?.brands)

    setFoodTypeHeader(jsonData.data.cards[0].card.card.header.title);
    setRestaurantHeader(jsonData.data.cards[1].card.card.header.title);
    setNearMeRestaurantTitle(jsonData?.data?.cards[6]?.card?.card?.title);
    setCuisinesNearMeTitle(jsonData?.data?.cards[7]?.card?.card?.title)

  };
  return status === false ? (
    <div>
      <h2>Oops! Looks like you are offline. Please Check your Internet Connection</h2>
    </div>
  ) : (filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-4">
          <input
            type="search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
            placeholder="Search for restaurants and food"
          />
          <button
            className="mx-2 border border-solid border-black bg-blue-300 w-20 rounded-lg"
            onClick={() => {
              const searchedFromList = listOfrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRes(searchedFromList);
            }}
          >
            Search
          </button>
          <button
          className="filter-btn  w-48 border border-black bg-green-100 rounded-lg"
          onClick={() => {
            const filteredList = filteredRes.filter(
              (res) => res.info.avgRating >= 4.3
            );

            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="foodContainer">
        <div className="foodHeaderContent">
          <div className="foodHeader  mx-6">
            <b className="m-2  pl-1 text-3xl">{foodTypeHeader}</b>
          </div>
         </div>
        <div className="flex mx-6 w-[3300px]">
          {foodType.map((foods) => (
            <FoodCard key={foods.id} resData={foods} />
          ))}
        </div>
        <div className="border border-gray-200"></div>
      </div>
      <div className="restroContainer mx-6">
        <div className="restroContainerHeader m-2  pl-1 text-3xl"><h2><b>{restaurantHeader}</b></h2></div>
        <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link style={{ textDecoration: 'none', color: 'black'}} 
            to={"/restaurants/"+restaurant.info.id} 
            key={restaurant.info.id}>
              {
              
              restaurant.info.avgRating >= 4.4 ? (<RestaurantCardOne  resData={restaurant}/>
              ) : (<RestaurantCards  resData={restaurant}/>)

              }
            </Link>
        ))}
        </div>
      </div>
      <div className="nearMe mx-2">
        <div className="restroNearMe ">
            <h2 className="mx-4 m-2 pl-1 text-3xl py-2"><b>{nearMeRestaurantTitle}</b></h2>
            <div className="nearMeContainer flex flex-wrap">
            {nearMeRestaurant.map((res,index) => (
                <NearMe  key={index} resData={res} />
            ))}
            </div>
        </div>
        <div className="cusieinNearMe ">
            <h2 className="mx-4 m-2  pl-1 text-3xl py-2"><b>{cuisinesNearMeTitle}</b></h2>
            <div className="nearMeContainer flex flex-wrap">
            {cuisinesNearMe.map((res,index) => (
                <NearMe key={index} resData={res} />
            ))}
            </div>
        </div>
      </div>
    </div>
  ))
};

export default Body;
