import React from "react";
import classes from "./changepassword.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Card from "../../components/ui/card/Card";
import Settingsubtitlemenu from "./Settingsubtitlemenu";

const Changepassword = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Tools & Settings" />
      <main className={classes.main}>
        <Settingsubtitlemenu />
        <Card className={classes.layout}>
          <div className={classes.heading}>
            <h2 className={classes.h2}>Change Password</h2>
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

export default Changepassword;
