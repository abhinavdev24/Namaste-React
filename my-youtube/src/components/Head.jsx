import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 my-2 shadow-lg">
      <div className="flex col-span-1 mx-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-4 my-auto cursor-pointer"
          src="https://openclipart.org/image/2000px/221605"
          alt="menu"
        />
        <Link to="/">
          <img
            className="h-6 mx-2 my-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-r-0 border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-2 px-6 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
