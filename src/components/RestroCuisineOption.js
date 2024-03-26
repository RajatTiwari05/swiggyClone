import RestroCuisineData from "./RestroCuisineData";
import { IMG_URL } from "../utils/constant";
import { useState } from "react";

const RestroCuisine = (resData) => {
    let data = resData;
    const [showIndex,setShowIndex] = useState(null);
    let footerData = resData.resData.groupedCard.cardGroupMap.REGULAR.cards;
    let footerImg = resData.resData.groupedCard.cardGroupMap.REGULAR.cards.filter((imgData) => 
        imgData.card.card.type == "FSSAI"
    );
    let addressFooter = resData.resData.groupedCard.cardGroupMap.REGULAR.cards.filter((imgData) => 
    imgData.card.card.completeAddress
);
    const item_card = resData.resData.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=> 
        c.card?.card?.itemCards
    );
    
    const category = data.resData.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=> 
    c.card?.card?.categories
    );

    return (
        <div className="commonCuisine mt-5">
            <div className="restroCuisineHeader">
                {item_card.map( (data,index) =>(
                    <RestroCuisineData key={index} resData={data} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex = { () =>   setShowIndex(index) }/>
                ))}
            </div>
            <div className="restroCuisineFooter border  h-[350px] bg-gray-100 ml-2">
                    <div className="flex">
                        <img className=" h-[50px] m-3" src={IMG_URL + footerImg[0].card.card.imageId}/>
                        <span className="mt-8 ml-2 text-lg text-gray-500">{footerImg[0].card.card.text[0]}</span>
                    </div>
                    <div className="border w-11/12 m-2"></div>
                    <div className="address">
                        <h2 className="text-lg mt-3 ml-3 text-gray-500 font-semibold">{addressFooter[0].card.card.name}</h2>
                        <span className="ml-3 text-gray-500 text-lg">(Outlet:{addressFooter[0].card.card.area})</span>
                        <p className="m-3 text-m text-gray-400">{addressFooter[0].card.card.completeAddress}</p>
                    </div>
            </div>
        </div>
        
    
    )
}

export default RestroCuisine;
