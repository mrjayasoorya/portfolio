import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    textDecoration: "underline",
  },
}));

function PageHeading(props) {
  const classes = useStyles();
  const { title } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" color="secondary" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeading;
