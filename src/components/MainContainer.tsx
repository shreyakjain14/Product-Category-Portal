import React from "react";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="m-4 bg-white rounded-lg p-6  relative max-w-5xl min-w-[40rem]">
      <Head />
      <Outlet />
    </div>
  );
};

export default MainContainer;
