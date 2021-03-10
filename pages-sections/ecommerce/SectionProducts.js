import React from "react";
// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import MuiAlert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "@material-ui/core/Snackbar";
import suit1 from "assets/img/examples/suit-1.jpg";
import liquorimage from "assets/img/items/2Ginger 1.75L.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/addItemAction";

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SectionProducts({ sectionId, query }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [imageSrc, setImageSrc] = React.useState(``);

  const newQuery = query;
  const [itemsPerPage, setItemsPerPage] = React.useState(20);
  const numberOfPages = Math.ceil(newQuery.length / itemsPerPage) - 1;
  const [itemQuery, setItemQuery] = React.useState(
    newQuery.slice(0, itemsPerPage)
  );

  console.log((page - 1) * itemsPerPage);
  console.log("slice(2): " + page * itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
    setItemQuery(
      newQuery.slice((value - 1) * itemsPerPage, value * itemsPerPage)
    );
  };
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

  const classes = useStyles();
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAddtoCart = (name, price, qty, id, setQty) => {
    let taxRate = 0;
    if (
      sectionId === "Beer" ||
      sectionId === "Liquor" ||
      sectionId === "Wine"
    ) {
      taxRate = 0.10375;
    } else if (sectionId === "Grocery") {
      taxRate = 0.7875;
    }

    const item = {
      name,
      price,
      qty,
      id,
      taxRate,
    };

    dispatch(addItem(item));
    setQty(1);
    setOpen(true);
  };

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
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>{sectionId}</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                {/* <Accordion
                  active={[0, 2]}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Filter",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checked={
                                    checked.indexOf(1) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="A"
                            />
                          </div>
                        </div>
                      ),
                    },
                  ]}
                /> */}
              </CardBody>
            </Card>
          </GridItem>

          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {itemQuery.map((item) => {
                const [qty, setQty] = React.useState(1);
                const newPrice = priceFormat(item.price);
                let newItem = setItemImage(item.name);
                console.log("newItem " + newItem);
                return (
                  <>
                    {/* start of each item 1*/}
                    <GridItem md={3} sm={6} key={item.name}>
                      <Card plain product style={{ height: "90%" }}>
                        <CardHeader noShadow image>
                          <img src={newItem} alt={item.name} id="itemImage" />
                        </CardHeader>
                        <CardBody plain>
                          <h4 className={classes.cardTitle}>{item.name}</h4>
                        </CardBody>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <h4>Qty: {qty}</h4>
                          <div className={classes.buttonGroup}>
                            <Button
                              color="info"
                              size="sm"
                              round
                              className={classes.firstButton}
                              onClick={() => {
                                if (qty > 1) {
                                  setQty(qty - 1);
                                }
                              }}
                            >
                              <Remove />
                            </Button>
                            <Button
                              color="info"
                              size="sm"
                              round
                              className={classes.lastButton}
                              onClick={() => setQty(qty + 1)}
                              style={{ overflow: "hidden" }}
                            >
                              <Add />
                            </Button>
                          </div>
                        </div>
                        <CardFooter
                          plain
                          className={classes.justifyContentBetween}
                        >
                          <div className={classes.priceContainer}>
                            <span className={classes.price}> ${newPrice}</span>
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
                        </CardFooter>
                      </Card>
                    </GridItem>

                    {/*end of each item 1*/}
                  </>
                );
              })}
              <Pagination
                count={numberOfPages}
                color="secondary"
                onChange={handleChange}
                page={page}
              />
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Item Added to Cart!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
