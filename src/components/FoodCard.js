import { IMG_URL } from "../utils/constant"

const FoodCard = (resData) => {
    return (
        
        <div className="px-2">
            <img className="hover:cursor-pointer " alt="Something Sizzling" src={IMG_URL+resData.resData.imageId}/>
        </div>
    )
}

export default FoodCard;