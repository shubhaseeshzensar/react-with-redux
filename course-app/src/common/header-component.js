import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  // const stylvar = {
  //   color: "red",
  // };
  return (
    <nav className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/*"></NavLink>
      <Outlet />
    </nav>
  );
};

export default Header;
