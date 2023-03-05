import React from "react";
import { MENU_IMG_CDN_URL } from "../config";

const MenuCard = ({
  name: itemName,
  cloudinaryImageId,
  defaultPrice,
  attributes,
}) => {
  return (
    <div className="menu-card grey-shadow">
      <div className="menu-card-details">
        <h3>
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
