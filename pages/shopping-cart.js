/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useDispatch, useSelector } from "react-redux";
import MyFooter from "../components/MyFooter";
import shoppingCartStyle from "assets/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";
import MyCard from "../components/MyCard";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { useState, useEffect } from "react";
import { updateItem, deleteItem } from "../store/actions/addItemAction";
import { createOrder } from "../store/actions/orderAction";

import Router from "next/router";
const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [checked]);

  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();
  const { cart } = useSelector((state) => state.cart);

  const handleChange = (event) => {
    setChecked(!checked);
    //dispatch delivery to true and to false if clicked
  };

  const handleRemove = (qty) => {
    qty = qty - 1;
    dispatch(updateItem(qty));
  };

  const renderTotal = () => {
    let prices = [];
    cart.map((item) => {
      const priceInt = parseFloat(item.price);
      if (item.qty > 1) {
        const newTotal = priceInt * item.qty;
        prices.push(newTotal);
      } else {
        prices.push(priceInt);
      }
    });
    const subTotal = prices.reduce((a, b) => {
      return a + b;
    }, 0);
    return subTotal;
  };

  const handlePurchase = async (total) => {
    const formatTotal = total.replace(".", "");
    const finalTotal = parseInt(formatTotal);
    let data = null;
    try {
      const response = await fetch(`/api/createOrder/${finalTotal}`);
      data = await response.json();
      if (data != null) {
        data.delivery = checked;
        dispatch(createOrder(data));
        try {
          cart.map(async (item) => {
            // const createLineItem = await fetch(`/api/createLineItem/${item.id}`)
            console.log(item)
            
          })
        } catch (error){
          console.log('error: ' + error.message)
        }
        Router.push('/payment')
      }
    } catch (error) {
      console.log("error: " + error.message);
    }
  };

  let finalTotal = (renderTotal() + renderTotal() * 0.137).toFixed(2);

  if (checked) {
    finalTotal = (renderTotal() + renderTotal() * 0.137 + 5.95).toFixed(2);
  }

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
              <h2 className={classes.title}>Check Out</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3 className={classes.cardTitle}>Shopping Cart</h3>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="deliveryCheck"
                      color="primary"
                    />
                  }
                  label="Check here for Delivery"
                />
              </div>
              {cart.map((item) => {
                return <MyCard item={item} />;
              })}
            </CardBody>
            <div style={{ alignSelf: "flex-end" }}>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Sub Total: <span>${renderTotal()}</span>
              </h4>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Taxes: <span>${(renderTotal() * 0.137).toFixed(2)}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Delivery Fee: <span>${checked ? 5.95 : 0}</span>
              </p>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Total: <span>${finalTotal}</span>
              </h3>
              <Button
                color="info"
                size="md"
                onClick={() => handlePurchase(finalTotal)}
                round
                // href="/payment"
              >
                COMPLETE PURCHASE
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
