import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import item1 from "assets/img/examples/item-1.svg";
import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";
import Badge from "@material-ui/core/Badge";
const useStyles = makeStyles(styles);
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/addItemAction";

export default function SectionProducts({ beer, liquor, wine, grocery }) {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const newBeer = beer.slice(0, 3);
  const newLiquor = liquor.slice(0, 3);
  const dispatch = useDispatch();

  const newWine = wine.slice(0, 3);
  const newGrocery = grocery.slice(0, 3);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const renderTotal = () => {};

  const priceFormat = (price) => {
    const newPrice = price.toString();
    const length = newPrice.length;
    if (newPrice.length === 2) {
      let myPrice = "." + newPrice.slice(0, 1) + newPrice.slice(1);
      price = myPrice;
    }
    if (newPrice.length === 3) {
      let myPrice = newPrice.slice(0, 1) + "." + newPrice.slice(1);
      price = myPrice;
    }

    if (newPrice.length === 4) {
      let myPrice = newPrice.slice(0, 2) + "." + newPrice.slice(2);
      price = myPrice;
    }
    return price;
  };

  const handleAddtoCart = (name, price, qty, id, setQty) => {
    const item = {
      name,
      price,
      qty,
      id,
    };

    dispatch(addItem(item));
    setQty(1);
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Beer</h2>
        <GridContainer>
          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {newBeer.map((item) => {
                const [qty, setQty] = React.useState(1);

                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={4} sm={4}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <Badge badgeContent={qty} color="secondary">
                            <img src={item1} alt=".." />
                          </Badge>
                        </CardHeader>
                        <CardBody plain>
                          <a href="#pablo">
                            <h4 className={classes.cardTitle}>{item.name}</h4>
                          </a>
                          <p className={classes.description}></p>
                        </CardBody>
                        <CardFooter
                          plain
                          className={classes.justifyContentBetween}
                        >
                          <div className={classes.priceContainer}>
                            <span className={classes.price}>
                              {" "}
                              ${priceFormat(item.price)}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              overflow: "hidden",
                            }}
                          >
                            <div className={classes.buttonGroup}>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.firstButton}
                                onClick={() => setQty(qty + 1)}
                              >
                                <Add />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.lastButton}
                                onClick={() => {
                                  if (qty > 1) {
                                    setQty(qty - 1);
                                  }
                                }}
                              >
                                <Remove />
                              </Button>
                            </div>
                            <Button
                              color="info"
                              className={classes.pullRight}
                              onClick={() =>
                                handleAddtoCart(
                                  item.name,
                                  newPrice,
                                  qty,
                                  item.id,
                                  setQty
                                )
                              }
                              style={{ overflow: "hidden" }}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                    {/*end of each item 1*/}
                  </>
                );
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <h2>Liquor</h2>
        <GridContainer>
          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {newLiquor.map((item) => {
                const [qty, setQty] = React.useState(1);

                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={4} sm={4}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <Badge badgeContent={qty} color="secondary">
                            <img src={item1} alt=".." />
                          </Badge>
                        </CardHeader>
                        <CardBody plain>
                          <a href="#pablo">
                            <h4 className={classes.cardTitle}>{item.name}</h4>
                          </a>
                          <p className={classes.description}></p>
                        </CardBody>
                        <CardFooter
                          plain
                          className={classes.justifyContentBetween}
                        >
                          <div className={classes.priceContainer}>
                            <span className={classes.price}>
                              {" "}
                              ${priceFormat(item.price)}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              overflow: "hidden",
                            }}
                          >
                            <div className={classes.buttonGroup}>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.firstButton}
                                onClick={() => setQty(qty + 1)}
                              >
                                <Add />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.lastButton}
                                onClick={() => {
                                  if (qty > 1) {
                                    setQty(qty - 1);
                                  }
                                }}
                              >
                                <Remove />
                              </Button>
                            </div>
                            <Button
                              color="info"
                              className={classes.pullRight}
                              onClick={() =>
                                handleAddtoCart(
                                  item.name,
                                  newPrice,
                                  qty,
                                  item.id,
                                  setQty
                                )
                              }
                              style={{ overflow: "hidden" }}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                    {/*end of each item 1*/}
                  </>
                );
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <h2>Wine</h2>
        <GridContainer>
          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {newWine.map((item) => {
                const [qty, setQty] = React.useState(1);

                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={4} sm={4}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <Badge badgeContent={qty} color="secondary">
                            <img src={item1} alt=".." />
                          </Badge>
                        </CardHeader>
                        <CardBody plain>
                          <a href="#pablo">
                            <h4 className={classes.cardTitle}>{item.name}</h4>
                          </a>
                          <p className={classes.description}></p>
                        </CardBody>
                        <CardFooter
                          plain
                          className={classes.justifyContentBetween}
                        >
                          <div className={classes.priceContainer}>
                            <span className={classes.price}>
                              {" "}
                              ${priceFormat(item.price)}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              overflow: "hidden",
                            }}
                          >
                            <div className={classes.buttonGroup}>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.firstButton}
                                onClick={() => setQty(qty + 1)}
                              >
                                <Add />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.lastButton}
                                onClick={() => {
                                  if (qty > 1) {
                                    setQty(qty - 1);
                                  }
                                }}
                              >
                                <Remove />
                              </Button>
                            </div>
                            <Button
                              color="info"
                              className={classes.pullRight}
                              onClick={() =>
                                handleAddtoCart(
                                  item.name,
                                  item.price,
                                  qty,
                                  item.id,
                                  setQty
                                )
                              }
                              style={{ overflow: "hidden" }}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                    {/*end of each item 1*/}
                  </>
                );
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <h2>Grocery</h2>
        <GridContainer>
          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {newGrocery.map((item) => {
                const [qty, setQty] = React.useState(1);

                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={4} sm={4}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <Badge badgeContent={qty} color="secondary">
                            <img src={item1} alt=".." />
                          </Badge>
                        </CardHeader>
                        <CardBody plain>
                          <a href="#pablo">
                            <h4 className={classes.cardTitle}>{item.name}</h4>
                          </a>
                          <p className={classes.description}></p>
                        </CardBody>
                        <CardFooter
                          plain
                          className={classes.justifyContentBetween}
                        >
                          <div className={classes.priceContainer}>
                            <span className={classes.price}>
                              {" "}
                              ${priceFormat(item.price)}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              overflow: "hidden",
                            }}
                          >
                            <div className={classes.buttonGroup}>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.firstButton}
                                onClick={() => setQty(qty + 1)}
                              >
                                <Add />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.lastButton}
                                onClick={() => {
                                  if (qty > 1) {
                                    setQty(qty - 1);
                                  }
                                }}
                              >
                                <Remove />
                              </Button>
                            </div>
                            <Button
                              color="info"
                              className={classes.pullRight}
                              onClick={() =>
                                handleAddtoCart(
                                  item.name,
                                  item.price,
                                  qty,
                                  item.id,
                                  setQty
                                )
                              }
                              style={{ overflow: "hidden" }}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                    {/*end of each item 1*/}
                  </>
                );
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
