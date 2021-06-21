import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { ArrowRightAlt } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#1f2532",
    height: "48px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#3cc091",
    },
    fontSize: "1.21rem",
    fontWeight: 500,
  },
  addColor: {
    color: "#3cc091",
  },
  description: {
    margin: "12px 0",
  },

  button: {
    color: "#fff",
    paddingLeft: "18px",
    backgroundColor: "#3cc091",
    "&:hover": {
      backgroundColor: blue["800"],
    },
  },
}));
const PostCard = ({ title, description, image }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Image
            src={image?image:"/images/post1.jpg"}
            alt="Post Image"
            height="72px"
            width="100%"
            layout="responsive"
            objectFit="cover"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Link href="/">
            <a className={classes.link}>{title}</a>
          </Link>
          <Typography
            style={{ display: "block" }}
            variant="caption"
            color="textSecondary"
          >
            by <span className={classes.addColor}>Yash Bhola</span> • June 20,
            2021
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
          >
            {description}
          </Typography>
          <Button className={classes.button} variant="contained" size="small">
            Read More <ArrowRightAlt fontSize="small" />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostCard;
