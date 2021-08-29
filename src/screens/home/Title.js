import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import withHeader from "../../hoc/header";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const style = (theme) => ({
  root: { display: "flex" },
  //   ANIMATION FOR SVG
  fadein: {
    WebkitAnimation: `$fade-in 1.2s cubic-bezier(.39,.575,.565,1.000) both`,
    animation: `$fade-in 1.2s cubic-bezier(.39,.575,.565,1.000) both`,
  },
  "@-webkit-keyframes fade-in": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes fade-in": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  // --

  contentTitleOne: {
    letterSpacing: 20,
    fontWeight: "bold",
    fontSize: "4rem",
  },
  contentTitleTwo: {
    letterSpacing: 10,
    margin: "0px 4px",
    fontSize: "2rem",
  },
  contentTitleThree: {
    letterSpacing: 10,
    margin: "0px 4px",
  },
  contentTitleFour: {
    letterSpacing: 10,
    margin: "0px 4px",
  },
  sectionTwo: {
    margin: "auto",
  },
  bounceTop: {
    "-webkit-animation": `$bounce-top 2s infinite both`,
    animation: `$bounce-top 2s infinite both`,
  },
  "@-webkit-keyframes bounce-top": {
    "0%": {
      "-webkit-transform": "translateY(-45px)",
              "transform": "translateY(-45px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
      opacity: 1
    },
    "24%": {
      opacity: 1,
    },
    "40%": {
      "-webkit-transform": "translateY(-24px)",
              "transform": "translateY(-24px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "65%": {
      "-webkit-transform": "translateY(-12px)",
              "transform": "translateY(-12px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "82%": {
      "-webkit-transform": "translateY(-6px)",
              "transform": "translateY(-6px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "93%": {
      "-webkit-transform": "translateY(-4px)",
              "transform": "translateY(-4px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "25%, 55%, 75%, 87%": {
      "-webkit-transform": "translateY(0px)",
              "transform": "translateY(0px)",
      "-webkit-animation-timing-function": "ease-out",
              "animation-timing-function": "ease-out",
    },
    "100%": {
      "-webkit-transform": "translateY(0px)",
              "transform": "translateY(0px)",
      "-webkit-animation-timing-function": "ease-out",
              "animation-timing-function": "ease-out",
      opacity: 1,
    }
  },
  "@keyframes bounce-top" :{
    "0%": {
      "-webkit-transform": "translateY(-45px)",
              "transform": "translateY(-45px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
      opacity: 1,
    },
    "24%": {
      opacity: 1,
    },
    "40%": {
      "-webkit-transform": "translateY(-24px)",
              "transform": "translateY(-24px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "65%": {
      "-webkit-transform": "translateY(-12px)",
              "transform": "translateY(-12px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "82%": {
      "-webkit-transform": "translateY(-6px)",
              "transform": "translateY(-6px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "93%": {
      "-webkit-transform": "translateY(-4px)",
              "transform": "translateY(-4px)",
      "-webkit-animation-timing-function": "ease-in",
              "animation-timing-function": "ease-in",
    },
    "25%, 55%, 75%, 87%": {
      "-webkit-transform": "translateY(0px)",
              "transform": "translateY(0px)",
      "-webkit-animation-timing-function": "ease-out",
              "animation-timing-function": "ease-out",
    },
    "100%": {
      "-webkit-transform": "translateY(0px)",
              "transform": "translateY(0px)",
      "-webkit-animation-timing-function": "ease-out",
              "animation-timing-function": "ease-out",
      opacity: 1,
    }
  }
});
class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid
            container
            item
            xs={5}
            justifyContent="center"
            className={classes.fadein}
          >
            <svg
              width="450"
              height="450"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.529 12.044C54.629 18.844 64.229 27.844 62.329 33.444C60.429 38.944 46.929 41.044 36.029 45.144C25.029 49.244 16.529 55.344 10.529 53.444C4.62898 51.544 1.32899 41.744 0.328986 32.744C-0.671014 23.644 0.528985 15.344 5.02899 9.34403C9.52899 3.34403 17.329 -0.455974 24.529 0.0440264C31.729 0.444026 38.429 5.14403 46.529 12.044Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="53.8014"
                  x2="53.1936"
                  y2="-8.06405"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={7} className={classes.sectionTwo}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.contentTitleOne}>
                Either you run the day or the day runs you.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.contentTitleTwo}>
                FULL STACK DEVELOPER
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                className={classes.contentTitleFour}
              >
                I'm M R JAYASOORYA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="caption"
                className={classes.contentTitleThree}
              >
                since 2019
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="subtitle1" align="center">
              Scroll Down
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center" >
            <ArrowDownwardIcon color="secondary" className={classes.bounceTop}/>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withHeader(withStyles(style)(Title));
