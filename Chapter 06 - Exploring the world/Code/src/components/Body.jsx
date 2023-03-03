import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { restrauntList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterRestaurants = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) => {
    const stringToSearch = (
      restaurant?.data?.name + restaurant?.data?.cuisines?.join(", ")
    ).toLowerCase();
    return stringToSearch.includes(searchText.toLowerCase());
  });
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.015811&lng=77.5390237&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };
  const searchRestaurant = () => {
    setRestaurants(filterRestaurants(searchText, restaurantList));
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
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
          <Shimmer />
        ) : restaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard {...restaurant?.data} key={restaurant?.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
