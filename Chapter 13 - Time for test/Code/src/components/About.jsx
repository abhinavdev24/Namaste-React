import React from "react";
import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-3xl">About US Page</h1>
      <p className="text-lg">
        This is Namaste React Live Course Chapter 07 - finding the path🚀
      </p>
      <Link className="bg-blue-500 p-1 rounded text-white" to="./profile">
        Profile
      </Link>
      <Outlet />
    </div>
  );
};

export default About;
