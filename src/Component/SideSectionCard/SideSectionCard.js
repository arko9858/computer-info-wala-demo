import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#3cc091",
    },
    fontSize: ".8rem",
    fontWeight: 500,
  },
}));

const SideSectionCard = ({title,image}) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Image
            src={image?image:"/images/subPost1.jpg"}
            alt="Post Image"
            height="64px"
            width="100%"
            layout="fixed"
          />
        </Grid>
        <Grid item xs={8}>
          <Link href="/">
            <a className={classes.link}>{title}</a>
          </Link>
          <Typography style={{display:'block'}} variant="caption" color="textSecondary">
            June 18, 2021
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideSectionCard;
