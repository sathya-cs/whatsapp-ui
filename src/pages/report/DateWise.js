import React from "react";
import classes from "./datewise.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Reportsubtitlemenu from "./Reportsubtitlemenu";
import Card from "../../components/ui/card/Card";

const DateWise = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Reports" />
      <main className={classes.main}>
        <Reportsubtitlemenu />
        <Card className={classes.layout}>
          <div className={classes.heading}>
            <h2 className={classes.h2}>Date Wise</h2>
          </div>
          <div className={classes.content}>
            <h1 className={classes.h1}>
              We are getting ready to launch <br></br>new CREATIVE page
            </h1>
          </div>
        </Card>
      </main>
    </>
  );
};

export default DateWise;
