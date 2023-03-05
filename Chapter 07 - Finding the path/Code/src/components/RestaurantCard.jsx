import React from "react";
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="restaurant-card grey-shadow">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image" />
      <h2 className="black">{name}</h2>
      <p className="grey">{cuisines?.join(", ")}</p>
      <div className="ratings">
        <h3 style={{ marginBottom: "0" }}>⭐{avgRating}</h3>
        <p className="black" style={{ margin: "0" }}>
          {totalRatingsString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
