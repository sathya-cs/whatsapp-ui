import React from "react";
import classes from "./creditlogsubtitlemenu.module.css";
import { NavLink } from "react-router-dom";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";

const Creditlogsubtitlemenu = () => {
  return (
    <>
      <Subtitlecard>
        <ul className={classes.titlemenu}>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/settings/credit-log/login-history"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Login History
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/settings/credit-log/manage-user"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Manage User
            </NavLink>
          </li>
        </ul>
      </Subtitlecard>
    </>
  );
};

export default Creditlogsubtitlemenu;
