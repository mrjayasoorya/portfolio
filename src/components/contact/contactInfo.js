import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Grid, makeStyles, Tooltip, Typography, withTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icons: {
    // margin: "0px 8px 16px 8px",
    textAlign:"center",
    "& svg":{
      color:"#6441A5",
    }

  },
  titleName: {
    textAlign: "left",
    color:"#FC466B",

  },
  titleMain: {
    color:"#6441A5",
    fontWeight: "bold",
  },
  footerText:{
      margin:"16px 0px 0px 0px"
  }
}));
function ContactInfo(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.titleName}>
        <Typography variant="subtitle1" className={classes.titleMain}>
          M R JAYASOORYA 🧑
        </Typography>
        <Typography variant="caption">Senior Software Engineer</Typography>
      </div>
      <hr />
      <Grid container spacing={1} style={{marginTop:16}}>
        <Tooltip title="Get in touch" arrow placement="bottom">
          <Grid item xs={3} className={classes.icons}>
            <a
              href="https://www.linkedin.com/in/jayasoorya-m-r-478477153/"
              target="_blank"
            >
              <LinkedInIcon color="primary" />
            </a>
          </Grid>
        </Tooltip>
        <Tooltip title="Write me" arrow placement="bottom">
          <Grid item xs={3} className={classes.icons}>
            <a href="mailto:mrjayasoorya@gmail.com" target="_blank">
              <AlternateEmailIcon color="primary" />
            </a>
          </Grid>
        </Tooltip>
        <Tooltip title="Text Me" arrow placement="bottom">
          <Grid item xs={3} className={classes.icons}>
            <a href="https://wa.me/919952120656" target="_blank">
              <WhatsAppIcon color="primary" />
            </a>
          </Grid>
        </Tooltip>
        <Tooltip title="Call Me" arrow placement="bottom">
          <Grid item xs={3} className={classes.icons}>
            <a href="tel:919952120656">
              <CallIcon color="primary" />
            </a>
          </Grid>
        </Tooltip>
      </Grid>
      <Grid container justifyContent="center" className={classes.footerText}>
          <Grid item>
              <Typography variant="subtitle1" style={{color:"FC466B"}}>
                  Click any one of the above to get in touch with me! 🤟
              </Typography>
          </Grid>
      </Grid>
    </div>
  );
}

export default withTheme(ContactInfo);
