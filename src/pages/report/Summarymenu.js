import React from "react";
import classes from "./summarymenu.module.css";
import { NavLink } from "react-router-dom";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";

const Summarymenu = () => {
  return (
    <>
      <Subtitlecard>
        <ul className={classes.titlemenu}>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/date-wise/send"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Sent
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/date-wise/received-after-24hr"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Received After 24 Hr
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/date-wise/received-within-24hr"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Received Within 24 Hr
            </NavLink>
          </li>
        </ul>
      </Subtitlecard>
    </>
  );
};

export default Summarymenu;
