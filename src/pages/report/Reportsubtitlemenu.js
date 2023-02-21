import React from "react";
import classes from "./reportsubtitlemenu.module.css";
import { NavLink } from "react-router-dom";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";

const Reportsubtitlemenu = () => {
  return (
    <>
      <Subtitlecard>
        <ul className={classes.titlemenu}>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/report/campaign-wise"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Campaign Wise
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/date-wise/send"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Date Wise
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/report/monthly-outgoing"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Monthly Outgoing
            </NavLink>
          </li>
        </ul>
      </Subtitlecard>
    </>
  );
};

export default Reportsubtitlemenu;
