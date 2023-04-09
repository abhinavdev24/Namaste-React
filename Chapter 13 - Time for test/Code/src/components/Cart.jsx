import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="m-5 font-bold text-2xl">Cart Items</h1>
      <button
        className="m-5 p-1 text-white rounded bg-red-500"
        onClick={clearCartItems}
      >
        Clear Cart
      </button>
      {Object.keys(cartItems).map((menuItemKey) => (
        <MenuCard item={cartItems[menuItemKey]} key={menuItemKey} />
      ))}
    </div>
  );
};

export default Cart;
