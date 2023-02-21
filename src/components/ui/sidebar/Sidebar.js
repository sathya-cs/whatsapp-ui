import { React, useState } from "react";
import classes from "./sidebar.module.css";
import logo from "../../../images/logo_icon.png";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import {
  BsFillGridFill,
  BsToggles,
  BsColumnsGap,
  BsBox,
  BsBoxArrowLeft,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <BsFillGridFill />,
    },
    {
      path: "/broadcast/single",
      name: "Broadcast",
      icon: <MdOutlineQuestionAnswer />,
    },
    {
      path: "templates/approved-templates",
      name: "Templates",
      icon: <BsColumnsGap />,
    },
    {
      path: "/settings/profile-update",
      name: "Tools & Setting",
      icon: <BsToggles />,
    },

    {
      path: "/report/campaign-wise",
      name: "Report",
      icon: <BsBox />,
    },
  ];
  return (
    <div
      style={{ width: isOpen ? "300px" : "50px" }}
      className={classes.sidebar}
    >
      <div className={classes.top_section}>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className={classes.logo}
        >
          <img src={logo} className={classes.logoimg} alt="logoimg " />
          <span className={classes.logotitle}>Perennial</span>
        </div>

        <div
          style={{ marginLeft: isOpen ? "50px" : "0px" }}
          className={classes.bars}
        >
          <BsBoxArrowLeft onClick={toggle} />
        </div>
      </div>
      <hr></hr>
      <div className={classes.menu}>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={classes.link}
            activeclassName="active"
          >
            <div className={classes.icon}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={classes.link_text}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
