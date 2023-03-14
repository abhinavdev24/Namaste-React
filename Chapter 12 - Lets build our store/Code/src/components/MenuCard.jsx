import React from "react";
import { useDispatch } from "react-redux";
import { MENU_IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";

const MenuCard = ({ item, addButton }) => {
  const { name: itemName, cloudinaryImageId, defaultPrice, attributes } = item;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(item));
  };
  return (
    <div className="menu-card grey-shadow border flex justify-between overflow-hidden m-5 shadow-xl rounded-lg text-gray-600">
      <div className="menu-card-details p-3">
        <h3 className="font-bold text-lg mb-2">
          {attributes?.vegClassifier === "VEG" ? "🟢" : "🔴"} {itemName}
        </h3>
        <p className="price">₹ {defaultPrice / 100}</p>
        <p className="serving">{attributes?.portionSize}</p>
      </div>
      <div className="menu-image flex items-center flex-col">
        <img src={MENU_IMG_CDN_URL + cloudinaryImageId} alt="" />
        {addButton && (
          <button
            className="p-2 m-5 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={addToCart}
          >
            Add Item
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
