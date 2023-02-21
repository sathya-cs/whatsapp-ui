import React from "react";
import classes from "./titlecard.module.css";
import Card from "../card/Card";

const Titlecard = (props) => {
  return (
    <Card className={classes.headercard}>
      <div className={classes.titlecard}>
        <span>{props.title}</span>
      </div>
    </Card>
  );
};

export default Titlecard;
