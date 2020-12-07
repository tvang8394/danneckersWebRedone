import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import suit6 from "assets/img/examples/suit-6.jpg";

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts({ id, query }) {
  const [checked, setChecked] = React.useState([1, 9, 27]);

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
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>{id}</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <Accordion
                  active={[0, 2]}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Clothing",
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
                              label="Blazers"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(2)}
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
                              label="Casual Shirts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(3)}
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
                              label="Formal Shirts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(4)}
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
                              label="Jeans"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(5)}
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
                              label="Polos"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(6)}
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
                              label="Pyjamas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(7)}
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
                              label="Shorts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(8)}
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
                              label="Trousers"
                            />
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          {/* end of menu */}
          <GridItem md={9} sm={9}>
            <GridContainer>
              {query.map((item) => {
                return (
                  <>
                    {/* start of each item 1*/}
                    <GridItem md={4} sm={4}>
                      <Card plain product>
                        <CardHeader noShadow image>
                          <a href="#pablo">
                            <img src={suit1} alt=".." />
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
      </div>
    </div>
  );
}
