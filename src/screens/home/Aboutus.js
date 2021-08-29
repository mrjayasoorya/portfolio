import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import withHeader from "../../hoc/header";

const style = (theme) => ({
  root: {
    background: "#fff",
    borderRadius: "2px",
    display: "block",
    margin: "1rem",
    position: "relative",
    width: "150px",
  },
});
class Aboutus extends Component {
    render() {
        let {classes} = this.props
    return (
        <Grid container >
            <Grid item xs={12} className={classes.root}>
            <Typography color="primary">sdfsdf</Typography>
            </Grid>
        </Grid>
    )
  }
}

export default withHeader(withStyles(style)(Aboutus));
