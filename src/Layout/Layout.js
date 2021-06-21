import React from "react";
import { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header/Header";
import { grey } from "@material-ui/core/colors";
import SideSection from "../SideSection/SideSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: grey[100],
  },
  content: {
    maxWidth: "1118px",
    margin: "0 auto",
  },
  body: {
    padding: "24px",
  },
  main: {
    minHeight: "100vh",
  },
  sideSection: {},
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square elevation={3} className={classes.content}>
        <header>
          <Header />
        </header>
        <div className={classes.body}>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <main className={classes.main}>{props.children}</main>
            </Grid>
            <Grid item md={4} xs={12}>
              <section className={classes.sideSection}>
                <SideSection />
              </section>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Layout;
