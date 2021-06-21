import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RssFeed, ExpandMore } from "@material-ui/icons";
import SideSectionCard from "../Component/SideSectionCard/SideSectionCard";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 16px",
    marginTop: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  subHeader: {
    display: "flex",
    padding: "8px 16px",
    backgroundColor: "#1f2532",
    color: theme.palette.getContrastText("#1f2532"),
    borderRadius: "3px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  subHeaderTitle: {
    fontSize: "1rem",
  },
  listItem: {
    display: "flex",
  },
  expandMoreIcon: {
    color: theme.palette.text.secondary,
  },
  subSection1: {
    marginBottom: "16px",
  },
}));

const title1 =
  "3 Simple Ways To Save A Bunch Of Money When Buying A New Computer";
const title2 = "Choosing The Best Audio Player Software For Your Computer";
const title3 = "5 Reasons To Purchase Desktop Computers";

const image1 = "/images/subPost1.jpg";
const image2 = "/images/post3.png";
const image3 = "/images/subPost3.jpg";

const SideSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subHeader}>
        <Typography className={classes.subHeaderTitle} variant="subtitle2">
          {"Subscribe our blog for More"}
        </Typography>
      </div>
      <div className={classes.subSection1}>
        <div className={classes.listItem}>
          <ExpandMore fontSize="small" className={classes.expandMoreIcon} />
          <RssFeed fontSize="small" />
          <Typography variant="body2" color="textSecondary">
            Posts
          </Typography>
        </div>
        <div className={classes.listItem}>
          <ExpandMore fontSize="small" className={classes.expandMoreIcon} />
          <RssFeed fontSize="small" />
          <Typography variant="body2" color="textSecondary">
            All Comments
          </Typography>
        </div>
      </div>

      <div className={classes.subHeader}>
        <Typography className={classes.subHeaderTitle} variant="subtitle2">
          {"Popular Posts"}
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SideSectionCard title={title1} image={image1} />
        </Grid>
        <Grid item xs={12}>
          <SideSectionCard title={title2} image={image2} />
        </Grid>
        <Grid item xs={12}>
          <SideSectionCard title={title3} image={image3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SideSection;
