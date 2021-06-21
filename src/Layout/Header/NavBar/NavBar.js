import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

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
    margin: "8px 16px",
    textDecoration: "none",
    color: "#fafafa",
    fontWeight: "500",
    fontSize: ".91rem",
    "&:hover": {
      color: "#3cc091",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Link href="/">
          <a className={classes.link}>Home</a>
        </Link>
        <Link href="/">
          <a className={classes.link}>About Us</a>
        </Link>
        <Link href="/">
          <a className={classes.link}>Privacy Policy</a>
        </Link>
        <Link href="/">
          <a className={classes.link}>Contact Us</a>
        </Link>
        <Link href="/">
          <a className={classes.link}>Download Youtube Thumbnail Free</a>
        </Link>
        <Link href="/">
          <a className={classes.link}>Forum</a>
        </Link>
      </Hidden>
    </div>
  );
};

export default NavBar;
