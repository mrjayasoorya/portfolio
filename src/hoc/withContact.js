import React from "react";
import ContactIcon from "../components/contact"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contact: {
      position: "absolute",
      zIndex: 2,
      bottom: 40,
      right: 30,
    },
  }));
const withContact = (Component) => (props) => {
    const classes = useStyles();
  return (
    <>
      <div className={classes.contact}>
      <ContactIcon />
      </div>
      <Component />
    </>
  );
};
export default withContact;
