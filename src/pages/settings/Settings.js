import React from "react";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Card from "../../components/ui/card/Card";
import Settingsubtitlemenu from "./Settingsubtitlemenu";
import classes from "./profileupdate.module.css";

const Settings = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Tools & Settings" />
      <main className={classes.main}>
        <Settingsubtitlemenu />
        <div className={classes.layout}>
          <Card className={classes.formcard}>
            <h1 className={classes.formheading}>Basic Info</h1>
            <hr className={classes.formdividerline}></hr>
            <form className={classes.formitems}>
              <div className={classes.formitem}>
                <label htmlFor="CompanyName" className={classes.formlabel}>
                  Company Name
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.formitem}>
                <label htmlFor="ContactPhone" className={classes.formlabel}>
                  Contact Phone
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.formitem}>
                <label htmlFor="ContactPerson" className={classes.formlabel}>
                  Contact Person
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.formitem}>
                <label htmlFor="Customer DTTLD" className={classes.formlabel}>
                  Customer DTTLD
                </label>
                <input type="text" className={classes.forminput}></input>
              </div>
              <div className={classes.formitem}>
                <label htmlFor="Address" className={classes.formlabel}>
                  Address
                </label>
                <textarea className={classes.forminputforaddress}></textarea>
              </div>
              <hr className={classes.formbtndivider}></hr>
              <div className={classes.formbtns}>
                <button className={classes.formbtn}>Discard</button>
                <button className={classes.formbtn}>SaveChanges</button>
              </div>
            </form>
          </Card>
          <div className={classes.layoutright}>
            <Card className={classes.accountinfocard}>
              <h1 className={classes.accountinfoheading}>Account Info</h1>
              <div className={classes.accountinfoitem}>
                <h3>company Name</h3>
                <p>Some Name</p>
              </div>
              <div className={classes.accountinfoitem}>
                <h3>Account Type</h3>
                <p>Prepaid</p>
              </div>
              <div className={classes.accountinfoitem}>
                <h3>Support</h3>
                <p>+91 8689899963 / 9811658716</p>
              </div>
            </Card>
            <Card className={classes.companyinfocard}>
              <h1 className={classes.companyinfoheading}>Company Info</h1>
              <div className={classes.companyinfoitem}>
                <h3>Company Name</h3>
                <p>Some Name</p>
              </div>
              <div className={classes.companyinfoitem}>
                <h3>Address</h3>
                <p>
                  504,Advent Atria Tower,Opp,Kingston Height,<br></br> Chincholi
                  Bunder Road,Malad (West),<br></br> Mumbai-400064,india
                </p>
              </div>
              <div className={classes.companyinfoitem}>
                <h3>Support</h3>
                <p>+91 8689899963 / 9811658716</p>
              </div>
              <div className={classes.companyinfoitem}>
                <h3>Toll-free number</h3>
                <p>1800 123 0803</p>
              </div>
              <div className={classes.companyinfoitem}>
                <h3>Website</h3>
                <p>www.Viria.io</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;
