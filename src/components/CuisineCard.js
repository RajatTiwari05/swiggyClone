import { IMG_URL } from "../utils/constant";
const CuisineCard = (dataCard) => {
  let dataCardValue = dataCard.dataCard.card.info;
  return (
    <div className="cuisineCard mt-10">
      <div className="individualCuisine flex justify-between">
        <div className="cuisineCardDetail">
          <div className="cuisineName">
            <h3 className="text-gray-700 text-lg">
              <b>{dataCardValue.name}</b>
            </h3>
          </div>
          <div className="cuisinePrice text-gray-600 text-m">
            <b>₹{dataCardValue.price / 100}</b>
          </div>
          <div className="mt-4 text-m text-gray-400 w-10/12">
            <span className="w-10/12">{dataCardValue.description}</span>
          </div>
        </div>
        <div className="imgCuisine">
        <img
              className="cusinesPic max-h-[110px] max-w-[155px] ml-2  border border-gray-100 rounded-md hover:cursor-pointer sm:bg-green-50" 
              src={IMG_URL + dataCardValue.imageId}
            />
           <button className="absolute w-[70px] h-[40px] border border-gray-300 rounded-lg ml-10 mt-[-30px] bg-white text-green-600 font-bold">
            ADD</button> 
        </div>
      </div>
      <div className="text-gray-600 border border-gray-500 mt-5"></div>
    </div>
  );
};

export default CuisineCard;
