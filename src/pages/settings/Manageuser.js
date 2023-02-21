import React from "react";
import classes from "./manageuser.module.css";
import Card from "../../components/ui/card/Card";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Creditlogsubtitlemenu from "./Creditlogsubtitlemenu";

const Manageuser = () => {
  const inviteUserFormSumbitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Titlecard title="Whatsapp / Tools & Settings" />
      <main className={classes.main}>
        <Creditlogsubtitlemenu />
        <Card className={classes.userinvitecard}>
          <h1 className={classes.userinvitecarttitle}>Invite User</h1>
          <form onSubmit={inviteUserFormSumbitHandler}>
            <div className={classes.userinviteformdetails}>
              <input type="email" className={classes.userinviteinput}></input>
              <button className={classes.userinvitebtn}>Add User</button>
            </div>
          </form>
        </Card>
        <Card className={classes.tablecard}>
          <div className={classes.tablehead}>
            <h1 className={classes.tabletitle}>All Users</h1>
          </div>
          <hr className={classes.tabledivider}></hr>
          <div className={classes.tabledetails}>
            <table className={classes.manageusertable}>
              <thead className={classes.manageusertablehead}>
                <tr>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className={classes.manageusertablebody}>
                <tr>
                  <td>test@gmail.com</td>
                  <td>User</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Nov 01,2020</td>
                  <td>
                    <select>
                      <option>Option</option>
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>
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

export default Manageuser;
