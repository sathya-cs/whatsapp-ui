import React from "react";
import classes from "./send.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Summarymenu from "./Summarymenu";
import Card from "../../components/ui/card/Card";

const Send = () => {
  const singleMessageFormHandling = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Titlecard title="Whatsapp / Summary" />
      <main className={classes.main}>
        <Summarymenu />
        <Card className={classes.formcontrol}>
          <form onSubmit={singleMessageFormHandling}>
            <div className={classes.formfield}>
              <div className={classes.inputfield}>
                <label htmlFor="mobile no" className={classes.formlabel}>
                  Mobile No
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.inputfield}>
                <label htmlFor="email" className={classes.formlabel}>
                  Email
                </label>
                <input type="email" className={classes.forminput}></input>
              </div>
              <div className={classes.inputfield}>
                <label htmlFor="name" className={classes.formlabel}>
                  Name
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.inputfield}>
                <label htmlFor="selecttype" className={classes.formlabel}>
                  select
                </label>
                <select className={classes.forminput}>
                  <option>Normal</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          </form>
        </Card>
        <Card className={classes.tablecard}>
          <h4>For Datatable</h4>
        </Card>
      </main>
    </>
  );
};

export default Send;
