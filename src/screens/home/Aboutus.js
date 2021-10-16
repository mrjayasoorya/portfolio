import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PageHeading from "../../components/pageHeading";
import withHeader from "../../hoc/header";

const style = (theme) => ({
  root: {
    background: "#fff",
    borderRadius: "8px",
    display: "block",
    margin: "4rem",
    position: "relative",
    width: "100%",
    padding: "8px",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem",
    },
    borderLeft:"10px solid BLACK",
borderImage:"linear-gradient( to bottom, white, rgb(0 0 0)) 1 100%"
  },
  points: {
    padding: "8px 0px",
  },
  mainSection: {
    overflow: "auto",
    // minHeight: 350,
    maxHeight: 350,
    margin: 15,
    [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
  },
  mainContent:{
      marginTop:20,
    height:"70vh",
    display:"flex",
    alignItems:"center"
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

  header: {
    // padding: 5,
  },
  headerItem:{
    //   padding:"5px 0px"
  }
});
class Aboutus extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Grid container>
      <PageHeading title="About Me"/>
      <Grid item xs={12} className={classes.mainContent}>
        <Grid item xs={12} className={classes.root}>
          <Grid container item xs={12} className={classes.header}>
           <Grid item xs={12}>
           <Typography variant="h4" color="primary" className={classes.headerItem}>
              I'm{" "}
            </Typography>
            <Typography variant="subtitle1" color="primary" className={classes.headerItem}>
              M. R. JAYASOORYA 🧑
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              className={classes.headerItem}
            >
              Fullstack Developer
            </Typography>
            <Typography variant="subtitle2" color="primary" className={classes.headerItem}>
              🗼 Chennai
            </Typography>
           </Grid>
           {/* <Grid item xs={4}>
              ✍️
          </Grid> */}
            <Grid item xs={12}>
            <hr />
            </Grid>
          </Grid>
          <Grid container item className={classes.mainSection}>
            <Grid item xs={12} className={classes.points}>
              <Typography variant="body1" color="primary">
                {" "}
                <span>👉</span> Been developed various products in web, for 2+
                years.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.points}>
              <Typography variant="body1" color="primary">
                <span>👉</span> Did Backend using Node JS
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.points}>
              <Typography variant="body1" color="primary">
                <span>👉</span> I like to try new things whenever i get time. I
                will work had and keen to be updated in new technology.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.subSection}>
            <Typography variant="body1">
              I have been working different domain applications, such as IOT,
              Ecommerce, Healthcare and delivered successfully!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    );
  }
}

export default withHeader(withStyles(style)(Aboutus));
