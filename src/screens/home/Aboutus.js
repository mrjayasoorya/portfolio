import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import withHeader from "../../hoc/header";

const style = (theme) => ({
  root: {
    background: "#fff",
    borderRadius: "8px",
    display: "block",
    margin: "4rem",
    position: "relative",
    width: "100%",
    padding:"8px",
    [theme.breakpoints.down('sm')]:{
        margin:"1rem"
    }
  },
  points:{
      padding:"8px 0px"
  }
});
class Aboutus extends Component {
    render() {
        let {classes} = this.props
    return (
        <Grid container >
            <Grid item xs={12} className={classes.root}>
            <Typography variant="h3" color="primary">I'm </Typography>
            <Typography variant="h4" color="primary">M. R. JAYASOORYA</Typography>
            <Typography variant="caption" color="primary">Fullstack Developer</Typography>
            <hr/>
            <Grid container item style={{overflow:"auto", minHeight:350, maxHeight:350}}>
                <Grid item xs={12} className={classes.points}>
                <Typography variant="body1" color="primary"> <span>👉</span>
                Been developed various products in web, for 2+ years.
                </Typography>
                </Grid>
                <Grid item xs={12} className={classes.points}>
                 <Typography variant="body1" color="primary"><span>👉</span> Did Backend using Node JS</Typography>
                </Grid>
                <Grid item xs={12} className={classes.points}>
                <Typography variant="body1" color="primary"><span>👉</span> I like to try new things whenever i get time. I will work had and keen to be updated in new technology.</Typography>
                </Grid>
                
            </Grid>
            </Grid>
        </Grid>
    )
  }
}

export default withHeader(withStyles(style)(Aboutus));
