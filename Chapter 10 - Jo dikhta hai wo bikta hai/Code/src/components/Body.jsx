import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { restrauntList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SHIMMER_CARD_COUNT, SWIGGY_RESTAURANT_LIST_URL } from "../config";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <button
            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

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
      <div className="search-container flex justify-center p-3 my-2 ">
        <input
          type="text"
          className="search-input rounded-l p-2 border border-solid border-neutral-300 focus:outline-none w-96"
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
        <button
          className="btn-search relative flex items-center rounded-r px-6 py-2.5 font-medium text-white hover:bg-sky-500 bg-sky-400"
          onClick={searchRestaurant}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="restaurant-list flex justify-evenly flex-wrap items-center">
        {restaurantList.length === 0 ? (
          Array(SHIMMER_CARD_COUNT)
            .fill("")
            .map((e, index) => (
              <Shimmer key={index} width="w-96" height="h-96" />
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
