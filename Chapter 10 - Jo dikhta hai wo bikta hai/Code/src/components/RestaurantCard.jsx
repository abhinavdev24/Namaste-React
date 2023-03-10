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
    <div className="max-w-sm hover:scale-105 rounded-lg overflow-hidden shadow-xl m-5 h-[400px]">
      <img
        className=""
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="card image"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="grey">{cuisines?.join(", ")}</p>
        <div className="ratings">
          <h3 style={{ marginBottom: "0" }}>⭐{avgRating}</h3>
          <p className="black" style={{ margin: "0" }}>
            {totalRatingsString}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
