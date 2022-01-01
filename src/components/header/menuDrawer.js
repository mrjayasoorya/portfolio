import React from "react";
// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
  list: {
    minWidth: 250,
    zIndex: 5,
  },
  fullList: {
    width: "auto",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "black",
  },
  closeButton:{
    position:"absolute", bottom:0, padding:20, textAlign:"center",width:"100%"
  }
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            classes={{
              paper: classes.list,
            }}
            open={open[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <List>
                <Link className={classes.menuItemLink} to={routes.home}>
              <ListItem li key={"Home"} >
                  <ListItemIcon>{"🏠"}</ListItemIcon>
                  <ListItemText style={{color:"#FC466B"}} primary={"Home"} />
              </ListItem>
                </Link>
                <Link className={classes.menuItemLink} to={routes.blog}>
              <ListItem li key={"Blog"}>
                  <ListItemIcon>{"📰"}</ListItemIcon>
                  <ListItemText style={{color:"#FC466B"}} primary={"Blog"} />
              </ListItem>
                </Link>
            </List>
            <div className={classes.closeButton}>
                <Button style={{background:"linear-gradient(to right, #3F5EFB, #FC466B)"}}  variant="contained" color="primary" onClick={toggleDrawer(anchor, false)}><CancelIcon color="secondary" style={{marginRight:"10px"}}/>Close</Button>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
