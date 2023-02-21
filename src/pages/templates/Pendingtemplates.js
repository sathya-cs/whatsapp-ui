import React from "react";
import classes from "./pendingtemplates.module.css";
import Card from "../../components/ui/card/Card";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Templatesubtitlemenu from "./Templatesubtitlemenu";

const Pendingtemplates = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Templates" />
      <main className={classes.main}>
        <Templatesubtitlemenu />
        <Card className={classes.layout}>
          <div className={classes.heading}>
            <h2 className={classes.h2}>Pending Templates</h2>
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

export default Pendingtemplates;
