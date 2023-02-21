import React from "react";
import classes from "./campaignwise.module.css";
import Card from "../../components/ui/card/Card";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Reportsubtitlemenu from "./Reportsubtitlemenu";
const Campaignwise = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Reports" />
      <main className={classes.main}>
        <Reportsubtitlemenu />
        <Card className={classes.tablecard}>
          <table className={classes.campaignwisereporttable}>
            <thead className={classes.campaignwisereporttablehead}>
              <tr>
                <th>Label</th>
                <th>API Keys</th>
                <th>Created</th>
                <th>Status</th>
              </tr>
            </thead>
          </table>
        </Card>
      </main>
    </>
  );
};

export default Campaignwise;
