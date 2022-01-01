import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableTemporaryDrawer from "./menuDrawer";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 60,
    maxHeight: 60,
    // paddingBottom:30,
    position: "sticky",
    top: 0,
    width: "100vw",
    color: "white",
    padding: "8px 0px",
    background:"linear-gradient(to right, #2a0845, #6441A5) !important"
  },
  menuTitleName: {
    padding: "0px 8px",
  },
  menuItem: {
    margin: "0px 8px",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "white",
  },
  menu:{
    padding:15
  }
}));


function Header(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };
  return (
    <div className={classes.root} id="header">
      <Grid container item xs={12}>
        {/* <Grid item xs={9} sm={6} className={classes.menuTitleName}>
          M. R. JAYASOORYA 🧑
        </Grid> */}
        <Grid container item xs={12} sm={12} justifyContent="flex-end" className={classes.menu}>
          <Hidden smDown>
            <NavLink className={classes.menuItemLink} to={routes.home}>
              <Grid item className={classes.menuItem}>
              🏠 Home 
              </Grid>
            </NavLink>
            <NavLink className={classes.menuItemLink} to={routes.blog}>
              <Grid item className={classes.menuItem}>
              📰 Blog
              </Grid>
            </NavLink>
          </Hidden>
          <Hidden mdUp>
            <MenuIcon onClick={toggleDrawer("right", true)}/>
          </Hidden>
        </Grid>
      </Grid>
      <SwipeableTemporaryDrawer toggleDrawer={toggleDrawer} open={state}/>
    </div>
  );
}

export default Header;
