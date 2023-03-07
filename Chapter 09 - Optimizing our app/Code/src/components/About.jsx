import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About US Page</h1>
      <p>This is Namaste React Live Course Chapter 07 - finding the path🚀</p>
      <Outlet />
    </div>
  );
};

export default About;
