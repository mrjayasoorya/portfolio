import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 100,
    maxHeight: 100,
    position: "sticky",
    top: 0,
    width: "100vw",
    color: "white",
    padding: "8px 0px",
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
}));

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item xs={12}>
        <Grid item xs={9} sm={6} className={classes.menuTitleName}>
          M R JAYASOORYA 🧑
        </Grid>
        <Grid container item xs={3} sm={6} justifyContent="flex-end">
          <Link className={classes.menuItemLink} to={routes.home}>
            <Grid item className={classes.menuItem}>
              Home
            </Grid>
          </Link>
          <Link className={classes.menuItemLink} to={routes.blog}>
            <Grid item className={classes.menuItem}>
              Blog
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
