import React from "react";

const Shimmer = ({ width, height }) => {
  // width = "w-[" + width + "] ";
  // height = "h-[" + height + "] ";
  return (
    <div
      className={
        width +
        " " +
        "hover:scale-105 rounded-lg overflow-hidden shadow-xl m-5 bg-slate-100 " +
        height
      }
    ></div>
  );
};

export default Shimmer;
