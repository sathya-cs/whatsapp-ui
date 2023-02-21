import React from "react";
import classes from "./receivedafter.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Summarymenu from "./Summarymenu";
import Card from "../../components/ui/card/Card";

const Receivedafter = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Summary" />
      <main className={classes.main}>
        <Summarymenu />
        <Card className={classes.layout}>
          <div className={classes.heading}>
            <h2 className={classes.h2}>Received After 24 Hr</h2>
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

export default Receivedafter;
