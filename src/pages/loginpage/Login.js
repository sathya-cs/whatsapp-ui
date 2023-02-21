import React from "react";
import classes from "./login.module.css";
import Card from "../../components/ui/card/Card";
import logo from "../../images/login.png";
import { Link } from "react-router-dom";
import Sidebar from "../../components/ui/sidebar/Sidebar";

const Login = () => {
  return (
    <div className={classes.loginpage}>
      <Card className={classes.logincard}>
        <img src={logo} alt="" />
        <form>
          <div className={classes.formitem}>
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="Enter User Name"></input>
          </div>
          <div className={classes.formitem}>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password"></input>
          </div>
          <Link to="/dashboard" className={classes.login}>
            <button>Login</button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default Login;
