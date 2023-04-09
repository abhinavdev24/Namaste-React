import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU_URL } from "../config";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantData(json.data);
  };

  // return restaurant data
  return restaurantData;
};

export default useRestaurantMenu;
