import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import DanneckerCarousel from "../assets/jss/nextjs-material-kit-pro/components/danneckersCarousel";

import GridItem from "components/Grid/GridItem.js";
// sections for this page
import SectionDescription from "pages-sections/presentation-page/SectionDescription.js";
import SectionCards from "pages-sections/presentation-page/SectionCards.js";
import SectionContent from "pages-sections/presentation-page/SectionContent.js";
import MyFooter from "../components/MyFooter";
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
                <h2>WHERE CENTS MEANS DOLLARS</h2>
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
      <MyFooter />
    </div>
  );
}
