import React from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurantMenu(restaurantId);

  return (
    <div className="menu-card-container">
      {!restaurantData ? (
        Array(10)
          .fill("")
          .map((e, index) => (
            <Shimmer key={index} width="800px" height="200px" />
          ))
      ) : (
        <div className="menu-card-container">
          <div className="restaurant-card-details">
            <div className="restaurant-name-address-wrapper">
              <h1>{restaurantData?.name}</h1>
              <p className="grey">{restaurantData?.cuisines.join(", ")}</p>
              <p className="grey">
                📌 {restaurantData?.area}, {restaurantData?.city} -{" "}
                {restaurantData?.areaPostalCode} (
                {restaurantData?.sla?.lastMileDistanceString})
              </p>
            </div>
            <div className="ratings">
              <h2>⭐{restaurantData?.avgRatingString}</h2>
              <p className="grey">{restaurantData?.totalRatingsString}</p>
            </div>
          </div>
          <div className="time-money">
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
