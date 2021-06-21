import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Link from "next/link";
import PostCard from "../../Component/PostCard/PostCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "24px",
  },
  subHeader: {
    display: "flex",
    padding: "8px 16px",
    backgroundColor: "#1f2532",
    color: theme.palette.getContrastText("#1f2532"),
    borderRadius: "3px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeaderTitle: {
    fontSize: "1rem",
  },
  viewAllLink: {
    textDecoration: "none",
    backgroundColor: "#3cc091",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0 8px",
    fontSize: ".8rem",
    borderRadius: "4px",
    height: "20px",
    "&:hover": {
      backgroundColor: "#1f2532",
    },
  },
  postList: {
    margin: "16px 0",
  },
}));

const title1 =
  "7 Simple Reasons Why You Need A Network Security Camera For Your Home";
const image1 = "/images/post1.jpg";
const description1 =
  "1. Easy to install: Most of the network cameras on the market are plug and play and/or have very simple to follow instruct…";

const title2 = "Cleaning And Organizing Your Computer";
const image2 = "/images/post2.jpg";
const description2 =
  "It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual…";

const title3 = "Choosing The Best Audio Player Software For Your Computer";
const image3 = "/images/post3.png";
const description3 =
  "Best Audio Player Software For Your Computer Audio player software is used to play back sound recordings in one of the man…";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subHeader}>
        <Typography className={classes.subHeaderTitle} variant="subtitle2">
          {"Recent posts"}
        </Typography>
        <Link href="/">
          <a className={classes.viewAllLink}>View all</a>
        </Link>
      </div>

      <div className={classes.postList}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PostCard
              title={title1}
              image={image1}
              description={description1}
            />
          </Grid>
          <Grid item xs={12}>
            <PostCard
              title={title2}
              image={image2}
              description={description2}
            />
          </Grid>
          <Grid item xs={12}>
            <PostCard image={image3} title={title3} description={description3} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
