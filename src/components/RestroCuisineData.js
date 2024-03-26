import { useState } from "react";
import CuisineCard from "./CuisineCard";
import { redirect } from "react-router-dom";
const RestroCuisineData = ({resData,showItems, setShowIndex}) => {
    let restroCuisineData = resData.card.card.itemCards;
    let title = resData.card.card;
    //console.log(title)
    // const [showItems,setShowItems] = useState(false);
    const onHandleClick = () => {
         //showItems == false ? setShowItems(true) : setShowItems(false)
         setShowIndex();
     }
    
    return (
        <div className="commonCuisine mt-5 border border-white ml-2">
            <div className="title text-xl flex justify-between font-bold hover:cursor-pointer" onClick={onHandleClick} >
                <h1>{title.title} ({restroCuisineData.length})</h1>
                {showItems  === false ? <span className="mr-6">🔻</span> : <span className="mr-6">🔺</span>}
                
            </div>
            <div className="cuisinesList">
                <div className="cuisineCard">
                    {showItems && restroCuisineData.map( (data,index) =>(
                        <CuisineCard key={index} dataCard={data}/>
                    ))}
                </div>
                <div className="border border-gray-100 h-[20px] my-4 bg-gray-100">

                </div>
            </div>
        </div>
    )
}

export default RestroCuisineData;