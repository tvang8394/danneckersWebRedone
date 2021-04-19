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
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/addItemAction";

const useStyles = makeStyles(styles);

export default function SectionProducts({ beer, liquor, wine, grocery }) {
  const [checked, setChecked] = React.useState([1, 9, 27]);

  const newBeer = beer.slice(0, 3);
  const newLiquor = liquor.slice(0, 3);
  const newWine = wine.slice(0, 3);
  const newGrocery = grocery.slice(0, 3);

  const dispatch = useDispatch();

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
    let taxRate = 0.10375;
    const item = {
      name,
      price,
      qty,
      id,
      taxRate,
    };

    dispatch(addItem(item));
    setQty(1);
  };

  const classes = useStyles();


  const setItemImage = (imageName) => {
    try {
      const imagePresentSrc = require(`../../assets/img/items/${imageName}.jpg`);
      console.log('image' + imageName)
      return imagePresentSrc;
    } catch (error) {
      const imageSrc = require(`../../assets/img/items/placeholder.jpg`);
      return imageSrc;
    }
  };

  const renderItems = (item) => {
    return (
      <GridContainer>
        {item.map((items) => {
          const [qty, setQty] = React.useState(1);
          const newPrice = priceFormat(items.price);
          let newItem = setItemImage(items.name);
          return (
            <GridItem md={4} sm={6}>
              <Card plain product style={{ height: "90%" }}>
                <CardHeader noShadow image>
                  <Badge badgeContent={qty} color="secondary">
                    <img src={newItem} alt=".." />
                  </Badge>
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>{items.name}</h4>
                  <p className={classes.description}></p>
                </CardBody>
                <CardFooter plain className={classes.justifyContentBetween}>
                  <div className={classes.priceContainer}>
                    <span className={classes.price}>
                      {" "}
                      ${priceFormat(items.price)}
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
                          items.name,
                          newPrice,
                          qty,
                          items.id,
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
          );
        })}
      </GridContainer>
    );
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Beer</h2>

        {/* end of menu */}
        <GridItem md={12} sm={12}>
          <GridContainer>{renderItems(newBeer)}</GridContainer>
        </GridItem>
      </div>

      <div className={classes.container}>
        <h2>Liquor</h2>

        {/* end of menu */}
        <GridItem md={12} sm={12}>
          <GridContainer>{renderItems(newLiquor)}</GridContainer>
        </GridItem>
      </div>

      <div className={classes.container}>
        <h2>Wine</h2>

        {/* end of menu */}
        <GridItem md={12} sm={12}>
          <GridContainer>{renderItems(newWine)}</GridContainer>
        </GridItem>
      </div>
    </div>
  );
}
