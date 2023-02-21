import React from "react";
import classes from "./monthlyoutgoing.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Reportsubtitlemenu from "./Reportsubtitlemenu";
import Card from "../../components/ui/card/Card";

const Monthlyoutgoing = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Reports" />
      <main className={classes.main}>
        <Reportsubtitlemenu />
        <Card className={classes.layout}>
          <div className={classes.heading}>
            <h2 className={classes.h2}>Monthly Outgoing</h2>
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

export default Monthlyoutgoing;
