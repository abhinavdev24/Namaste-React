import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import Logo from "../assets/img/Logo.jpg";

const Title = () => {
  return (
    <Link to="/" className="">
      <img data-testid="logo" className="h-full" src={Logo} alt="logo" />
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
            <Link data-testid="cart" to="/cart">
              Cart={cartItems.length} items
            </Link>
          </li>
          <li className="px-10 text-lg hover:scale-105">{user.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
