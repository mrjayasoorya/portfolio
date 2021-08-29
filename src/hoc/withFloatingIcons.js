import React from 'react';
import FloatingContactInfo from '../components/floatingIcons';
import {Hidden, makeStyles} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    floatingIconRoot:{
        position:"absolute",
        top:"40%",
        zIndex:2
    }
}));

const FloatingIcons = Component => props => {
    const classes = useStyles();
    return (
        <div>
           <Hidden smDown>
           <div className={classes.floatingIconRoot}>
            <FloatingContactInfo/>
            </div>
           </Hidden>
            <Component/>
        </div>
    );
}

export default FloatingIcons;