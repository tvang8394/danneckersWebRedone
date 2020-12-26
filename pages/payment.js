/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import CardPayment from "../components/CardPayment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { useDispatch, useSelector } from "react-redux";
import MyFooter from "../components/MyFooter";
import shoppingCartStyle from "assets/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";
import { useFormik } from "formik";
import { useState } from "react";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',

    }
  })
  
  return (
    <div>
      <Header
        brand="Danneckers Liquor & Grocery"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "dark",
        }}
      />

      <Parallax
        image={require("assets/img/examples/bg2.jpg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>Payment</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardPayment />
            </Grid>
          </Grid>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
