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
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
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
import Clearfix from "components/Clearfix/Clearfix.js";

import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import item1 from "assets/img/examples/item-1.svg";
import item2 from "assets/img/examples/item-2.svg";

import suit6 from "assets/img/examples/suit-6.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
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
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          {/* end of menu */}
          <GridItem md={12} sm={12}>
            <GridContainer>
              {/* start of each item 1*/}
              <GridItem md={3} sm={3}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit1} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Polo Ralph Lauren</h4>
                    </a>
                    <p className={classes.description}>
                      Impeccably tailored in Italy from lightweight navy wool.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $24.99</span>
                    </div>

                    <Button color="rose" className={classes.pullRight}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              {/*end of each item 1*/}

              <GridItem md={3} sm={3}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={item2} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Wooyoungmi</h4>
                    </a>
                    <p className={classes.description}>
                      Dark-grey slub wool, pintucked notch lapels.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €555</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={3} sm={3}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={item1} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Tom Ford</h4>
                    </a>
                    <p className={classes.description}>
                      Immaculate tailoring is TOM FORD{"'"}s forte.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €879</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={3} sm={3}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit4} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Thom Sweeney</h4>
                    </a>
                    <p className={classes.description}>
                      It{"'"}s made from lightweight grey wool woven.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €680</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit5} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Kingsman</h4>
                    </a>
                    <p className={classes.description}>
                      Crafted from khaki cotton and fully canvassed.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €725</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit6} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Boglioli</h4>
                    </a>
                    <p className={classes.description}>
                      Masterfully crafted in Northern Italy.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €699</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem
                md={3}
                sm={3}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Button round color="rose">
                  Load more...
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
      </div>
    </div>
  );
}
