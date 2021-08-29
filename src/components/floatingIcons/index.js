import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Grid, makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icons: {
    margin: "0px 8px 16px 8px",
  },
}));

function FloatingContactInfo(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Tooltip title="Get in touch" arrow placement="right">
        <Grid item xs={12} className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/jayasoorya-m-r-478477153/"
            target="_blank"
          >
            <LinkedInIcon color="secondary" />
          </a>
        </Grid>
      </Tooltip>
      <Tooltip title="Write me" arrow placement="right">
        <Grid item xs={12} className={classes.icons}>
          <a href="mailto:mrjayasoorya@gmail.com" target="_blank">
            <AlternateEmailIcon color="secondary" />
          </a>
        </Grid>
      </Tooltip>
      <Tooltip title="Text Me" arrow placement="right">
        <Grid item xs={12} className={classes.icons}>
          <a href="https://wa.me/919092893151" target="_blank">
            <WhatsAppIcon color="secondary" />
          </a>
        </Grid>
      </Tooltip>
      <Tooltip title="Call Me" arrow placement="right">
        <Grid item xs={12} className={classes.icons}>
          <a href="tel:919952120656">
            <CallIcon color="secondary" />
          </a>
        </Grid>
      </Tooltip>
    </Grid>
  );
}

export default FloatingContactInfo;
