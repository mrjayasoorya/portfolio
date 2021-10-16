import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PageHeading from "../../components/pageHeading";
import withHeader from "../../hoc/header";

const style = (theme) => ({
  root: {
    background: "#fff",
    borderLeft:"10px solid BLACK",
borderImage:"linear-gradient( to bottom, white, rgb(0 0 0)) 1 100%",
    borderRadius: "8px",
    display: "block",
    margin: "4rem",
    position: "relative",
    width: "100%",
    padding: "8px",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem",
    },
  },
  points: {
    padding: "8px 0px",
  },
  subSection: {
    // fontSize: "large",
    fontWeight: "bold",
    color: "white",
    background: "BLACK",
    padding: "15px 20px",
    borderRadius: "5px",
    margin: 30,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  mainContent:{
      height:"65vh",
      display:"flex",
      alignItems:"center"
  }
});
class Contact extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <PageHeading title="Apart From Coding" />
        </Grid>
       <Grid item xs={12} className={classes.mainContent}>
       <Grid container item className={`${classes.root}`}>
          <Grid item xs={12} className={classes.points}>
            <Typography variant="body1" color="primary">
              {" "}
              <span>👉</span> Thinking to work on my fitness 😜, swiping through
              social medias and 🎧 Listening to songs.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.points}>
            <Typography variant="body1" color="primary">
              <span>👉</span> Hanging out with friends
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.points}>
            <Typography variant="body1" color="primary">
              <span>👉</span> Spending some time with family
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.points}>
            <Typography variant="body1" color="primary">
              <span>👉</span> I do travel whenever we get some time.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.subSection}>
            <Typography variant="body1">
            ✍ Technical blog is on progress, once completed will publish
            </Typography>
          </Grid>
        </Grid>
       </Grid>
      </Grid>
    );
  }
}

export default withHeader(withStyles(style)(Contact));
