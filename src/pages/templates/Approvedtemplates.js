import React from "react";
import classes from "./approvedtemplates.module.css";
import Card from "../../components/ui/card/Card";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import Templatesubtitlemenu from "./Templatesubtitlemenu";

const Approvedtemplates = () => {
  return (
    <>
      <Titlecard title="Whatsapp / Templates" />
      <main className={classes.main}>
        <Templatesubtitlemenu />
        <Card className={classes.tablecard}>
          <table className={classes.approvedtemplatestable}>
            <thead className={classes.approvedtemplatestablehead}>
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

export default Approvedtemplates;
