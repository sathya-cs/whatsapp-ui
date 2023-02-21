import React from "react";
import classes from "./subtitlecard.module.css";
import Card from "../card/Card";
const Subtitlecard = (props) => {
  return (
    <Card className={classes.subtitlecardmain}>
      <div className={classes.subtitlecard}>{props.children}</div>
    </Card>
  );
};

export default Subtitlecard;
