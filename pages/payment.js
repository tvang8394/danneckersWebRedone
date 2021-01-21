/*eslint-disable*/
import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
import CardPayment from "../components/CardPayment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  const clover = new Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const { order } = useSelector((state) => state.order);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const totalQty = () => {
    let qty = [];
    cart.map((item) => {
      qty.push(item.qty);
    });
    return qty;
  };

  useEffect(() => {
    async function postLineItem(itemId) {
      const createLineItem = await fetch(
        `/api/createLineItem/${order.id}/${itemId}`
      );
      const response = await createLineItem.json();
      return response;
    }
    const qtyArry = totalQty();

    const qtyTotal = qtyArry.reduce((a, b) => {
      return a + b;
    }, 0);

    async function getLineItemForOrder(qtyTotal) {
      const lineItemForOrder = await fetch(`/api/getAllLineItems/${order.id}`);
      const response = await lineItemForOrder.json();
      const lineItems = response["elements"];
      if (lineItems.length === qtyTotal) {
        return;
      } else {
        cart.map((item) => {
          for (let i = 0; i < item.qty; i++) {
            if (i < item.qty) {
              postLineItem(item.id);
            }
          }
        });
      }
    }
    getLineItemForOrder(qtyTotal);
  }, [order]);

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Dannecker's | Payment</title>
      </Head>
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
          <CardPayment clover={clover} />
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
