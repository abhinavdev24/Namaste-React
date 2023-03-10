import React from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurantMenu(restaurantId);
  // const restaurantData = undefined;

  return (
    <div className="menu-card-container w-[800px] mx-auto">
      {!restaurantData ? (
        Array(10)
          .fill("")
          .map((e, index) => (
            <Shimmer key={index} width="w-full" height="h-52" />
          ))
      ) : (
        <div className="menu-card-container">
          <div className="restaurant-card-details flex justify-between">
            <div className="restaurant-name-address-wrapper">
              <h1 className="font-bold text-4xl">{restaurantData?.name}</h1>
              <p className="grey my-2 text-gray-500">
                {restaurantData?.cuisines.join(", ")}
              </p>
              <p className="grey text-gray-500">
                📌 {restaurantData?.area}, {restaurantData?.city} -{" "}
                {restaurantData?.areaPostalCode} (
                {restaurantData?.sla?.lastMileDistanceString})
              </p>
            </div>
            <div className="rating items-end flex flex-col">
              <h2 className="font-bold text-green-600 text-2xl">
                ⭐{restaurantData?.avgRatingString}
              </h2>
              <p className="grey">{restaurantData?.totalRatingsString}</p>
            </div>
          </div>
          <div className="time-money flex justify-between my-2 font-bold text-gray-600">
            <h3>⏳ {restaurantData?.sla?.slaString}</h3>
            <h3>{restaurantData?.costForTwoMsg}</h3>
          </div>
          {Object.keys(restaurantData.menu.items).map((menuItemKey) => (
            <MenuCard
              {...restaurantData?.menu?.items[menuItemKey]}
              key={menuItemKey}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
