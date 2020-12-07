import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import item1 from 'assets/img/examples/item-1.svg'
import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts({ beer, liquor, wine, grocery }) {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const newBeer = beer.slice(0, 4);
  const newLiquor = liquor.slice(0, 4);
  const newWine = wine.slice(0, 4);
  const newGrocery = grocery.slice(0, 4);
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
                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={3} sm={3}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <a href="#pablo">
                            <img src={ item1} alt=".." />
                          </a>
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

                          <Button color="rose" className={classes.pullRight}>
                            Add to Cart
                          </Button>
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
                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={3} sm={3}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <a href="#pablo">
                            <img src={item1} alt=".." />
                          </a>
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

                          <Button color="rose" className={classes.pullRight}>
                            Add to Cart
                          </Button>
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
                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={3} sm={3}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <a href="#pablo">
                            <img src={item1} alt=".." />
                          </a>
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

                          <Button color="rose" className={classes.pullRight}>
                            Add to Cart
                          </Button>
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
                return (
                  <>
                    {/* start of each item 1*/}

                    <GridItem md={3} sm={3}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <a href="#pablo">
                            <img src={item1} alt=".." />
                          </a>
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

                          <Button color="rose" className={classes.pullRight}>
                            Add to Cart
                          </Button>
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
