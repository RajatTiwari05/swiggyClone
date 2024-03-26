const NearMe = (res) => {
    return (
        <div className="commonContainer border border-gray-400 rounded-lg  ml-8 m-2 pt-2">
            <div className="containerText w-[250px] h-[45px]"> 
                <center>{res.resData.text}</center>
            </div>
        </div>
    )
}


export default NearMe;