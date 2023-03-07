import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { restrauntList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SHIMMER_CARD_COUNT, SWIGGY_RESTAURANT_LIST_URL } from "../config";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const isOnline = useOnline();
  useEffect(() => {
    if (isOnline) getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_LIST_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };
  const searchRestaurant = () => {
    setRestaurants(filterRestaurants(searchText, restaurantList));
  };

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a restaurant or cuisine"
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") setRestaurants(restaurantList);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchRestaurant();
          }}
          value={searchText}
        />
        <button className="btn-search" onClick={searchRestaurant}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.length === 0 ? (
          Array(SHIMMER_CARD_COUNT)
            .fill("")
            .map((e, index) => (
              <Shimmer key={index} width="300px" height="400px" />
            ))
        ) : restaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          restaurants.map((restaurant) => (
            <Link
              to={"restaurant/" + restaurant?.data.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
