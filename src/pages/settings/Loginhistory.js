import React from "react";
import classes from "./loginhistory.module.css";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Card from "../../components/ui/card/Card";
import Creditlogsubtitlemenu from "./Creditlogsubtitlemenu";

const Loginhistory = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Tools & Settings" />
      <main className={classes.main}>
        <Creditlogsubtitlemenu />
        <Card className={classes.tablecard}>
          <div className={classes.tablehead}>
            <h1 className={classes.tabletitle}>Recent Login</h1>
          </div>
          <hr className={classes.tabledivider}></hr>
          <div className={classes.tabledetails}>
            <table className={classes.loginhistorytable}>
              <thead className={classes.loginhistorytablehead}>
                <tr>
                  <th>Username</th>
                  <th>IP</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody className={classes.loginhistorytablebody}>
                <tr>
                  <td>none set</td>
                  <td>jsjbjdkquuegdeyy928898</td>
                  <td>Nov 01, 2020</td>
                </tr>
                <tr>
                  <td>Navitare</td>
                  <td>jsjbjdkquuegdeyy928898</td>
                  <td>sep 27, 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/**<div className={classes.container}>
            <ul className={classes.pagination}>
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>

              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>**/}
        </Card>
      </main>
    </>
  );
};

export default Loginhistory;
