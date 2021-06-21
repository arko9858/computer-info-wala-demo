import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import NavBar from "./NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  logoContainer: {
    display: "flex",
    width: "100%",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    minHeight: "100vh",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              alt="Picture of the author"
              height="60px"
              width="136px"
            />
          </a>
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
