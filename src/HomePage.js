import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

function HomePage() {
  return (
    <div className="flex">
    <h1>Hello everyone, you are on the Home Page</h1>
      <NavLink className="logout" to="/">Logout</NavLink>
    </div>
  );
}

export default HomePage;
