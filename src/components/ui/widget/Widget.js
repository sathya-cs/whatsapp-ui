import React from "react";
import classes from "./widget.module.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Widget = (props) => {
  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <h1>{props.count}</h1>
        <div className={classes.messageaction}>
          <p>{props.messageaction}</p>
          <HelpOutlineIcon className={classes.msgactionicon} />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.icon}>{props.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
