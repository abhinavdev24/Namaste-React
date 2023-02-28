import React from "react";
import ReactDOM from "react-dom/client";
import restrauntList from "./RestaurantList";
/**
 * Header
 *  - Logo
 *  - List Items(Right Side)
 *  - Cart
 * Body
 *  - Search bar
 *  - RestrauntList
 *    - RestaurantCard
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s176-c-k-c0x00ffffff-no-rj"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="card image"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restrauntList.map((restaurant) => (
        <RestaurantCard {...restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<AppLayout />);
