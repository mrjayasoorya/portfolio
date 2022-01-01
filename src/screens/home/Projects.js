import { Button, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PageHeading from "../../components/pageHeading";
import withHeader from "../../hoc/header";

const style = (theme) => ({
  root: {
    background: "#fff",
    // borderLeft:"10px solid BLACK",
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
  mainContent:{
    height:"70vh",
    display:"flex",
    alignItems:"center"
  },
  subSection: {
    // fontSize: "large",
    fontWeight: "bold",
    color: "white",
    background: "linear-gradient(to right, #3F5EFB, #FC466B) !important",
    padding: "15px 20px",
    borderRadius: "5px",
    margin: 30,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  projects:{
    [theme.breakpoints.down("sm")]: {
        margin:"25px 0px"
      },
  },
  projectsItem:{
    [theme.breakpoints.down("sm")]: {
        padding:"5px 0px"
      },
      "& button":{
        background: "linear-gradient(to top, #2a0845c7, #6441A5) !important",
      }
  },
});
class Projects extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <PageHeading title="Projects Worked" />
        </Grid>
<Grid item xs={12} className={classes.mainContent}>
<Grid item xs={12} className={classes.root}>
          <Grid item xs={12} className={classes.subSection}>
            <Typography variant="body1">
              🤘 I've been architecting and developing applications based on
              requirements. Some were scalable and few complex.
            </Typography>
          </Grid>
          <Grid container item justifyContent="space-evenly" className={classes.projects}>
            <Grid item className={classes.projectsItem}>
              <Button variant="contained" color="primary">
                Ecommerce Web Application
              </Button>
            </Grid>
            <Grid item className={classes.projectsItem}>
              <Button variant="contained" color="primary">
                Health Care Product
              </Button>
            </Grid>
            <Grid item className={classes.projectsItem}>
              <Button variant="contained" color="primary">
                IOT Web dashboard
              </Button>
            </Grid>
            <Grid item className={classes.projectsItem}>
              <Button variant="contained" color="primary">
                Interior Design
              </Button>
            </Grid>
          </Grid>
        </Grid>
</Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(Projects);
