import React from "react";
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default RestaurantCard;
