import React from "react";
import { NavLink } from "react-router-dom";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";
import classes from "./settingsubtitlemenu.module.css";

const Settingsubtitlemenu = () => {
  return (
    <>
      <Subtitlecard>
        <ul className={classes.titlemenu}>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/settings/profile-update"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Profile Update
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/settings/change-password"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Change Password
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/settings/credit-log/login-history"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Credit Log
            </NavLink>
          </li>
        </ul>
      </Subtitlecard>
    </>
  );
};

export default Settingsubtitlemenu;
