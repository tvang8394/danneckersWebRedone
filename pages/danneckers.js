import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import DanneckerCarousel from "../assets/jss/nextjs-material-kit-pro/components/danneckersCarousel";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "pages-sections/presentation-page/SectionDescription.js";
import SectionCards from "pages-sections/presentation-page/SectionCards.js";
import SectionContent from "pages-sections/presentation-page/SectionContent.js";

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import {
  getBeerItems,
  getLiquorItems,
  getWineItems,
  getGroceryNonTaxItems,
} from "./api/getItems";

const useStyles = makeStyles(presentationStyle);

export async function getServerSideProps() {
  const beer = await getBeerItems();
  const liquor = await getLiquorItems();
  const wine = await getWineItems();
  const groceryNonTax = await getGroceryNonTaxItems();

  return {
    props: { beer, liquor, wine, groceryNonTax },
  };
}
export default function PresentationPage({
  beer,
  liquor,
  wine,
  groceryNonTax,
}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Danneckers Liquor & Grocery"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
      />
      <Parallax
        image={require("assets/img/logo.svg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  DANNECKER'S
                  <span className={classes.proBadge}>2.0</span>
                </h1>
                <h3>WHERE CENTS MEANS DOLLARS</h3>
                <h3 className={classes.title}>
                  Business Hours: Mon - Sat / 9AM - 9PM & Sun / 11AM - 6PM
                  <br></br>
                  Store Location: 793 Randolph Ave, Saint Paul, MN 55102
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <DanneckerCarousel />

        <SectionDescription />
        <SectionContent />
        <SectionCards
          beer={beer}
          liquor={liquor}
          wine={wine}
          grocery={groceryNonTax}
        />
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <a href="/" target="_blank" className={classes.footerBrand}>
                Danneckers Liquor & Grocery
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="/" target="_blank" className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="/"
                    target="_blank"
                    color="facebook"
                    justIcon
                    simple
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="/"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>

                <li>
                  <Button
                    href="/"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
