import React from "react";
import { MENU_IMG_CDN_URL } from "../config";

const MenuCard = ({
  name: itemName,
  cloudinaryImageId,
  defaultPrice,
  attributes,
}) => {
  console.log("defaultPrice", defaultPrice);
  return (
    <div className="menu-card grey-shadow border flex justify-between p-3 m-5 shadow-xl rounded-lg text-gray-600 hover:scale-105">
      <div className="menu-card-details">
        <h3 className="font-bold text-lg mb-2">
          {attributes?.vegClassifier === "VEG" ? "🟢" : "🔴"} {itemName}
        </h3>
        <p className="price">₹ {defaultPrice / 100}</p>
        <p className="serving">{attributes?.portionSize}</p>
      </div>
      <div className="menu-image">
        <img src={MENU_IMG_CDN_URL + cloudinaryImageId} alt="" />
      </div>
    </div>
  );
};

export default MenuCard;
