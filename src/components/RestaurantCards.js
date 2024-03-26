import {IMG_URL} from "../utils/constant"

const RestaurantCards = (resData) => {
    const header = resData.resData.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = resData.resData.info?.aggregatedDiscountInfoV3?.subHeader;
    return (
        <div className="my-4 w-[370px] mx-4">
            <img className="logoCard  h-[210px] w-[360px] rounded-2xl hover:h-[190px] hover:w-[340px]" alt='Something Sizzling' src={IMG_URL+resData.resData.info.cloudinaryImageId} />
            <div>
                {header == undefined ? <label className="emptyLabel"></label> : <label className="absolute mt-[-28px] ml-[60px] font-bold text-white bg-orange-400 text-xl italic pl-6 rounded-lg w-[250px]">{header + " " + (subHeader == undefined ? "" : subHeader)}</label>}
            </div>
            <h3 className="text-gray-600 mt-4"><b>{resData.resData.info.name}</b></h3>
            <div className="another flex">
                <svg  className="value mt-[3.5px]" width="18" height="18" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                <h4 className="text-gray-600"><b>{resData.resData.info.avgRating }</b></h4>
                <h4 className="text-gray-600"><b>{ "        .         " +resData.resData.info.sla.deliveryTime + " minutes"}  </b></h4>
            </div>
            <p className="paraValue">{resData.resData.info.cuisines.join(', ')}</p>
        </div>
    )
}

//Higher order Function to display one Free Delivery label on top
export const withOneFreeDeliveryLabel = (RestaurantCards) => {
    return (props) => {
        return (
            <div>
                <label className="absolute italic bg-orange-600 text-white font-bold h-[50px] w-[150px] mt-[20px] ml-[2px] text-center pt-[10px] rounded-lg ">One Free Delivery</label>
                
                <RestaurantCards {...props}/>
            </div>
            
        )
    }
    
}

export default RestaurantCards;