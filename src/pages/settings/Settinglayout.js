import React from "react";
import { Outlet } from "react-router-dom";
import Settings from "./Settings";

const Settinglayout = () => {
  return (
    <>
      <Settings />
      <Outlet />
    </>
  );
};

export default Settinglayout;
