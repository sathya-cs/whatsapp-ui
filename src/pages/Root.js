import React from "react";
import classes from "./root.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/sidebar/Sidebar";
import Navbar from "../components/ui/navbar/Navbar";
const Root = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <hr className={classes.divider}></hr>
      <div className={classes.maincontainer}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
