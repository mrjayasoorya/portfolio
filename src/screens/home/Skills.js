import { Avatar, Chip, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router";
import PageHeading from "../../components/pageHeading";
import withHeader from "../../hoc/header";
let origin = window.location.origin;

let data = [
  {
    title: "JS FRAMEWORKS",
    languages: [
      { image: "/images/reactjs.png", label: "REACT JS" },
      {
        image: "/images/node.svg",
        label: "NODE JS",
      },
    ],
  },
  {
    title: "COMPONENT FRAMEWORKS",
    languages: [
      { image: "/images/materialui.png", label: "MATERIAL UI" },
      { image: "/images/reactjs.png", label: "REACTSTRAP" },
    ],
  },
  {
    title: "BUNDLERS",
    languages: [
      { image: "/images/webpack.webp", label: "WEBPACK" },
    ],
  },
  {
    title: "CLOUDS",
    note: "Beginner know only the basics",
    languages: [
      { image: "/images/aws.webp", label: "AWS" },
      {
        image: "/images/digitalocean.png",
        label: "DIGITAL OCEAN",
      },
    ],
  },
  {
    title: "WEB SERVERS",
    note: "Beginner know only the basics",
    languages: [
      { image: "/images/nginx.png", label: "NGNIX" },
      { image: "/images/apache.png", label: "APACHE" },
    ],
  },
];
const style = (theme) => ({
  chip: {
    borderRadius: "4px !important",
    fontSize: "0.7rem",
    "& .MuiChip-root": {
      "& .MuiChip-avatar": {
        fontSize: "0.7rem !important",
      },
    },
  },
  root: {
    width: "100%",
    margin: "2em 4rem",
    display: "block",
    padding: "8px",
    position: "relative",
    background: "#fff",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      margin: "2em 1rem",
    },
  },
  mainContent: {
    height: "70vh",
    display: "flex",
    alignItems: "center",
  },
});
class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { classes } = this.props;
    const ProgramSkills = (props) => {
      const { title, languages = [], note } = props;
      return (
        <Grid container item>
          <Grid item xs={12}>
            <Typography color="primary" variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid container>
            {languages.map((val) => {
              return (
                <Grid item style={{ margin: "0px 10px 0px 0px" }}>
                  {/* <Chip icon={val.image} label={val.label} /> */}
                  <Chip
                    className={classes.chip}
                    color="primary"
                    avatar={
                      val?.image?.length > 0 ? (
                        <Avatar color="primary" src={val.image} />
                      ) : (
                        <Avatar color="primary">
                          {val?.label?.[0] ?? "JS"}
                        </Avatar>
                      )
                    }
                    label={val.label}
                    onClick={"handleClick"}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              {note && (
                <Typography color="primary" variant="caption">
                  {note}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      );
    };
    return (
      <Grid container>
        <Grid item xs={12}>
          <PageHeading title="Coding On" />
        </Grid>
        <Grid item xs={12} className={classes.mainContent}>
          <Grid item xs={12} className={classes.root}>
            {data.map((val) => {
              return (
                <div style={{ marginBottom: "10px" }}>
                  <ProgramSkills
                    title={val.title}
                    languages={val.languages}
                    note={val.note}
                  />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withHeader(withStyles(style)(withRouter(Skills)));
