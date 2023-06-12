import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import dashboardIcon from "../assets/icons/dashboard_icon.png";
import allProductsIcon from "../assets/icons/all-products.png";

const SideBar = () => {
  return (
    <div className="m-4 p-4 bg-white rounded-lg flex-grow-1 max-md:hidden min-w-min">
      <div className="flex items-center mb-8 mt-4">
        <img className="h-8 mr-4 " src={LOGO_URL} alt="website-log" /> A.T. Inks
      </div>
      <div className="flex items-center p-3">
        <img src={dashboardIcon} className="mr-2" />
        Dashboard
      </div>
      <div className="flex items-center p-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "flex w-full items-center rounded-md " +
            (isActive ? "text-red-900 bg-red-300 p-3" : "")
          }
        >
          <img src={allProductsIcon} className="mr-2 h-8" />
          All Products
        </NavLink>
      </div>
      <div className="flex items-center p-3">
        <img src={allProductsIcon} className="mr-2 h-8 w-8" />
        Orders
      </div>
      <div className="flex items-center p-3">
        <img src={allProductsIcon} className="mr-2 h-8 w-8" />
        Favourites
      </div>
      <div className="flex items-center p-3">
        <img src={allProductsIcon} className="mr-2 h-8 w-8" />
        New Arrival
      </div>
    </div>
  );
};

export default SideBar;
