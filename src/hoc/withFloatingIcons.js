import React from 'react';
import FloatingContactInfo from '../components/floatingIcons';
import {makeStyles} from "@material-ui/core"
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
            <div className={classes.floatingIconRoot}>
            <FloatingContactInfo/>
            </div>
            <Component/>
        </div>
    );
}

export default FloatingIcons;