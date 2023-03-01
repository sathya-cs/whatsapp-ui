import React, { useState } from "react";
import "react-dropdown/style.css";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "../modal/Modal";
import logo from "../../../images/logo_icon.png";

const Navbar = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  const toggleHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <div className={classes.togglesidebar}>
            <div className={classes.top_section}>
              <div className={classes.logo}>
                <img src={logo} className={classes.logoimg} alt="logoimg " />
                <span className={classes.logotitle}>Perennial</span>
              </div>
            </div>
            <hr></hr>
            <ul className={classes.togglesidebarmenu}>
              <Link
                to="/dashboard"
                className={classes.togglesidebarmenuitems}
                onClick={toggleHandler}
              >
                Dashboard
              </Link>
              <Link
                to="/broadcast/single"
                className={classes.togglesidebarmenuitems}
                onClick={toggleHandler}
              >
                Broadcast
              </Link>
              <Link
                to="templates/approved-templates"
                className={classes.togglesidebarmenuitems}
                onClick={toggleHandler}
              >
                Templates
              </Link>
              <Link
                to="/settings/profile-update"
                className={classes.togglesidebarmenuitems}
                onClick={toggleHandler}
              >
                Setting
              </Link>
              <Link
                to="/report/campaign-wise"
                className={classes.togglesidebarmenuitems}
                onClick={toggleHandler}
              >
                Report
              </Link>
            </ul>
          </div>
        </Modal>
      ) : null}

      <div className={classes.navbar}>
        <div className={classes.bars}>
          <GiHamburgerMenu onClick={toggleHandler} />
        </div>
        <ul className={classes.navbarlist}>
          <li className={classes.navbarlink}>Whatsapp</li>
          <li className={classes.navbarlink}>SMS</li>
          <li className={classes.navbarlink}>IVR</li>
        </ul>
        <div className={classes.navbaricons}>
          <p className={classes.count}>
            Balance:
            <span className={classes.icon2}>1,000</span>
          </p>
          <span className={classes.dropdown}>
            <button className={classes.dropbtn}>Hi,Sean</button>
            <span className={classes.dropdowncontent}>
              <Link to="/settings/profile-update">Setting</Link>
              <Link to="/">LogOut</Link>
            </span>
          </span>
          <span className={classes.usersymbol}>S</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
