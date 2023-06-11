import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Cart from "./Cart";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex p-4 bg-gray-100 flex-1">
      <SideBar />
      <MainContainer />
      <Cart />
    </div>
  );
};

export default Body;
