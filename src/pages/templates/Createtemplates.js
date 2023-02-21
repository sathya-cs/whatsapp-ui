import React from "react";
import classes from "./createtemplates.module.css";
import Card from "../../components/ui/card/Card";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Templatesubtitlemenu from "./Templatesubtitlemenu";

const Createtemplates = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Templates" />
      <main className={classes.main}>
        <Templatesubtitlemenu />
        <Card className={classes.Createtemplatescard}>
          <div className={classes.set}>
            <div className={classes.templatecardhead}>
              <h1 className={classes.title}>TEMPLATE NAME</h1>
              <hr className={classes.border}></hr>
            </div>
            <form>
              <input className={classes.entertemplatename} type="text"></input>
            </form>
            <div>
              <span className={classes.hint}>Note:</span>
              <p>Add the dynamic data with [[Dynamic data]]</p>
              <p>
                Example: hi [[name]], your orders has dispatched to shipping
                today!
              </p>
              <p>Total Product count [[number]]</p>
            </div>
          </div>
          <div className={classes.set}>
            <div className={classes.templatecardhead}>
              <h1 className={classes.title}>TEMPLATE BODY (MAX LENGTH 1024)</h1>
              <hr className={classes.border}></hr>
            </div>
            <div className={classes.middlesetitems}>
              <p className={classes.middlesetitemscontent}>
                *Limited Days left on your K7 Free Trail*
              </p>

              <p className={classes.middlesetitemscontent}>Dear [[name]]</p>
              <p className={classes.middlesetitemscontent}>
                Your [[product_name]] Free Trial is expiring on
                [[trial_expiry]].
              </p>
            </div>
            <div>
              <span className={classes.hint}>Note:</span>
              <p>Provide sample data for dynamic values as comma separated</p>
              <p>Example: Demouser,4</p>
            </div>
          </div>
          <div className={classes.set}>
            <div className={classes.templatecardhead}>
              <h1 className={classes.title}>SAMPLE CONTENT</h1>
              <hr className={classes.border}></hr>
            </div>
            <div className={classes.bottomsetitems}></div>
            <p>
              Make sure not to include any actual user or customer information,
              and provide only sample content in your examples Learn more
            </p>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Createtemplates;
