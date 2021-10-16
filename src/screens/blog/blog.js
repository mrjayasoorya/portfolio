import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PageHeading from "../../components/pageHeading";
import withHeader from "../../hoc/header";
import devToLogo from "../../images/dev-to-logo.png";

const style = (theme) => ({
  root: {
    borderRadius: "8px",
    display: "block",
    margin: "4rem",
    position: "relative",
    width: "100%",
    padding: "8px",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem",
    },
    // borderRight: "10px solid BLACK",
    // borderLeft: "10px solid BLACK",
    // borderImage: "linear-gradient( to left, white, rgb(0 0 0)) 1 100%",
    [theme.breakpoints.down("sm")]: {
        // borderBottom: "2px solid white",
        // borderRadius: "0px",
        
  },
  },
  mainContent: {
    marginTop: 20,
    height: "calc(100vh - 200px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.7rem",
    },
  },
});

class BlogSection extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Grid container>
        {/* <PageHeading title="Blogs" /> */}
        <Grid item xs={12} className={classes.mainContent}>
          <Grid item xs={12} className={classes.root}>
            <a
              href="https://dev.to/mrjayasoorya"
              target="_blank"
              style={{
                textDecoration: "underline",
                color: "black",
                textAlign: "center",
                width: "100%",
                margin: "auto",
              }}
            >
              {/* <img src={devToLogo} width={150} /> */}
              <Typography
                variant="h3"
                color="secondary"
                className={classes.title}
              >
                blogs@mrjayasoorya
              </Typography>
              <Typography
                variant="subtitle2"
                color="secondary"
                style={{
                  textAlign: "center",
                  width: "100%",
                  display: "inline-block",
                }}
              >
                Cool! No blogs published yet
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withHeader(withStyles(style)(BlogSection));
