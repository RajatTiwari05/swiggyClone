
import { useEffect, useState } from "react";



const useRestaurantMenu = (resId) => {
    const[ menuData , setMenuData] = useState(null);
     
    useEffect(() => {
        fetchData();
      }, []);
      
    const fetchData = async () => {
        const data = await fetch(
          "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER" ); 

        const jsonData = await data.json();
        setMenuData(jsonData.data.cards);
    };

    return menuData;
}

export default useRestaurantMenu;