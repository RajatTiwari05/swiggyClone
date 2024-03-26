import RestroCuisine from "./RestroCuisineOption";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import OfferCodeCard from "./OfferCodeCard";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restroCuisine = useRestaurantMenu(resId);
    const offerCodeData = restroCuisine;
    //const [showItems,setShowItems] = useState(false);
    // const onHandleClick = () => {
    //     showItems == false ? setShowItems(true) : setShowItems(false)
    // }
    
    if (restroCuisine === null ){
        return (<div className="font-bold text-gray-500 text-2xl m-8">
            Loading...
        </div>)
    }


    return  (
        <div className="commonRestaurantMenuContainer ml-[200px] mt-[50px] w-8/12 pl-[100px] p2-[50px]">
            <h1 className="headerTag text-3xl py-3"><b>{restroCuisine[0].card.card.info.name}</b></h1>
            <div className="flex justify-between">
                <div className="cuisinesRestroMenu">
                    <p className="text-gray-600">{restroCuisine[0].card.card.info.cuisines.join(',')}</p>
                    <p className="text-gray-600">{restroCuisine[0].card.card.info.areaName}, {restroCuisine[0].card.card.info.sla.lastMileTravelString}</p>
                </div>
                <div className=" pt-1 pl-1 mr-10 border border-gray-400 rounded-md w-20 h-18">
                    <div className="ratingRestroMenu">
                        <div className="ratingBox text-sm pr-[5px] ">
                            <div className="ratingRow flex">
                                <svg  className="star mt-1" width="12" height="12" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                                <p className="pl-1 pt-[2px] text-xs text-gray-600">{restroCuisine[0].card.card.info.avgRatingString}</p>
                            </div>
                            <p className="text-gray-600">------------</p>
                            <p className="text-xs text-gray-600">10K+ rartings</p>
                            
                        </div>
                </div>
                </div>
            </div>
            <div className="additionalText">
                {/* <p className="text-gray-600 mt-2">{restroCuisine[0]?.card?.card?.info?.expectationNotifiers[0]?.text}</p> */}
                <p className=" text-gray-600 border border-gray-500 mt-5"></p>
                <div className="border border-white bg-white h-[200px]">
                    <div className="mt-2">
                        <span className="mt-2 text-lg font-bold text-gray-500">{restroCuisine[0].card.card.info.sla.slaString}</span>
                        <span className="mt-2 text-lg font-bold text-gray-500 ml-4">{restroCuisine[0].card.card.info.costForTwoMessage}</span>
                    </div>
                    <OfferCodeCard resData={restroCuisine[1]}/>
                </div>
                <p className=" text-gray-600 border border-gray-500 mt-5"></p>
            </div>
            <div className="commonRestroCusinisOptions" >
                {console.log(restroCuisine[2])}
                <RestroCuisine resData={restroCuisine[2]} />
            </div>
        
        </div>
    )
}

export default RestaurantMenu;