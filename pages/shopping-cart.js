/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useDispatch, useSelector } from "react-redux";
import MyFooter from "../components/MyFooter";
import shoppingCartStyle from "assets/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";
import MyCard from "../components/MyCard";

import { useState } from "react";
import { updateItem, deleteItem } from "../store/actions/addItemAction";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch;
  const classes = useStyles();
  const { cart } = useSelector((state) => state.cart);

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
              <h3 className={classes.cardTitle}>Shopping Cart</h3>
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
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Total:{" "}
                <span>
                  ${(renderTotal() + renderTotal() * 0.137).toFixed(2)}
                </span>
              </h3>
              <Button color="info" size="md" href="/payment" round>
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
