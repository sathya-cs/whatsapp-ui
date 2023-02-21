import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./single.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Subtitlecard from "../../components/ui/Subtitlecard/Subtitlecard";
import Card from "../../components/ui/card/Card";

const Single = () => {
  const singleMessageFormHandling = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Titlecard title="Whatsapp / Broadcast" />
      <main className={classes.main}>
        <Subtitlecard>
          <ul className={classes.subtitlecard_menu}>
            <li className={classes.menuitem}>
              <NavLink
                to="/broadcast/single"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.navlink
                }
              >
                Single
              </NavLink>
            </li>
            <li className={classes.menuitem}>
              <NavLink
                to="/broadcast/multiple"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.navlink
                }
              >
                Multiple
              </NavLink>
            </li>
          </ul>
          <button className={classes.chatbtn}>Chat Window</button>
        </Subtitlecard>
        <div className={classes.layout}>
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
                <div className={classes.textareainputfield}>
                  <label htmlFor="name" className={classes.formlabel}>
                    Message
                  </label>
                  <textarea className={classes.msgarea}></textarea>
                </div>
                <div className={classes.btn}>
                  <button className={classes.submitbtn}>Sumbit</button>
                </div>
              </div>
            </form>
          </Card>
          <Card className={classes.templatecard}>
            <div className={classes.top}>
              <div>
                <span className={classes.templatecardtitle}>
                  Choose a Template
                </span>
                <p>Form total 482 Template</p>
              </div>
              <button className={classes.managebtn}>Manage Templates</button>
            </div>
            <form>
              <input
                htmlFor="text"
                className={classes.templatecardinput}
                placeholder="Search template"
              ></input>
            </form>
            <span className={classes.templates1}>Tempalte 1</span>
            <div className={classes.bottom}>
              <span className={classes.templates2}>Template 2</span>
              <p className={classes.templatescontent}>
                Withdraw money to your bank account per transaction under
              </p>
              <button className={classes.applybtn}>Apply</button>
            </div>
            <span className={classes.templates3}>Template 3</span>
            <span className={classes.templates4}>Template 4</span>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Single;
