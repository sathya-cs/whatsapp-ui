import React from "react";
import { NavLink } from "react-router-dom";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";
import classes from "./templatesubtitlemenu.module.css";

const Templatesubtitlemenu = () => {
  return (
    <>
      <Subtitlecard>
        <ul className={classes.titlemenu}>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/templates/approved-templates"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Approved Templates
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/templates/pending-templates"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Pending Templates
            </NavLink>
          </li>
          <li className={classes.titlemenuitems}>
            <NavLink
              to="/templates/create-templates"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
              }
            >
              Create Templates
            </NavLink>
          </li>
        </ul>
      </Subtitlecard>
    </>
  );
};

export default Templatesubtitlemenu;
