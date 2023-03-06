import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { restrauntList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SHIMMER_CARD_COUNT, SWIGGY_RESTAURANT_LIST_URL } from "../config";
import { Link } from "react-router-dom";
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
    const data = await fetch(SWIGGY_RESTAURANT_LIST_URL);
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
          Array(10)
            .fill("")
            .map((e, index) => (
              <Shimmer key={index} width="300px" height="400px" />
            ))
        ) : restaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          restaurants.map((restaurant) => (
            <Link to={"restaurant/" + restaurant?.data.id}>
              <RestaurantCard
                {...restaurant?.data}
                key={restaurant?.data?.id}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
