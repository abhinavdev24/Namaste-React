import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Title = () => {
  return (
    <Link to="/" className="">
      <img
        className="h-full"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s176-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </Link>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-xl mb-5 h-14">
      <Title />
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="px-10 text-lg hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">
            <Link to="/cart">Cart={cartItems.length} items</Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">{user.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
