import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restrauntList } from "../config";
import { useState } from "react";

const filterRestaurants = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) => {
    const stringToSearch = (
      restaurant.name + restaurant.cuisines.join(", ")
    ).toLowerCase();
    return stringToSearch.includes(searchText.toLowerCase());
  });
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntList);

  const searchRestaurant = () => {
    setRestaurants(filterRestaurants(searchText, restrauntList));
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
            if (e.target.value === "") setRestaurants(restrauntList);
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
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
