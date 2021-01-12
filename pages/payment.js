/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import CardPayment from "../components/CardPayment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
import { useState, useEffect } from "react";
import PaymentFormUser from "../components/PaymentFormUser";
import PaymentFormNoUser from "../components/PaymentFormNoUser";
const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const { order } = useSelector((state) => state.order);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    async function postLineItem(itemId) {
      const createLineItem = await fetch(
        `/api/createLineItem/${order.id}/${itemId}`
      );
      const response = await createLineItem.json();
      return response;
    }

    // cart.map((item) => {
    //   for (let i = 0; i < item.qty; i++) {
    //     if (i < item.qty) {
    //       postLineItem(item.id);
    //     }
    //   }
    // });
    async function getLineItems() {
      const item = cart.map(async (item) => {
        const lineItemId = await postLineItem(item.id);
        const getLineitem = await fetch(`/api/getAllLineItems/${order.id}`);
        const itemResponse = await getLineitem.json();
        return itemResponse;
      });
      return item;
    }

    async function updateLineItems() {
      const getLineItemResponse = await getLineItems();
    }
    updateLineItems();
  }, [order]);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      email: "",
      zipCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          <CardPayment />
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
