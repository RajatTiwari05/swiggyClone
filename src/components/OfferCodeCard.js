const OfferCodeCard = (resData) => {
    let offerCode= resData.resData.card.card.gridElements.infoWithStyle.offers;


    return (
        <div>
            {offerCode.map( (data) => {
                <div>
                    {OfferDataCard(data)}
                </div>
            })}
            
        </div>
    )
}

const OfferDataCard = (data) => {
    return (
        <div  className="border border-gray-400 bg-red">
        </div>
    )
}

export default OfferCodeCard;