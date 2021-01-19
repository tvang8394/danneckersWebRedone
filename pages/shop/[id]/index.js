import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import MyFooter from "../../../components/MyFooter";
// sections for this page
import SectionProducts from "pages-sections/ecommerce/SectionProducts.js";
import Head from 'next/head';

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";
import {
  getBeerItems,
  getLiquorItems,
  getWineItems,
  getGroceryNonTaxItems,
  getTobaccoItems,
} from "../../api/getItems";

const useStyles = makeStyles(styles);

export async function getServerSideProps() {
  const beer = await getBeerItems();
  const liquor = await getLiquorItems();
  const wine = await getWineItems();
  const groceryNonTax = await getGroceryNonTaxItems();
  const tobacco = await getTobaccoItems();
  return {
    props: { beer, liquor, wine, groceryNonTax, tobacco },
  };
}

export default function EcommercePage({ beer, liquor, wine, groceryNonTax, tobacco }) {
  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const renderItem = () => {
    if (id === "Beer") {
      return <SectionProducts id={id} query={beer} />;
    }
    if (id === "Liquor") {
      return <SectionProducts id={id} query={liquor} />;
    }
    if (id === "Grocery") {
      return <SectionProducts id={id} query={groceryNonTax} />;
    }
    if (id === "Wine") {
      return <SectionProducts id={id} query={wine} />;
    }
    if (id === "Tobacco") {
      return <SectionProducts id={id} query={tobacco} />;
    }
  };
  return (
    <div>
    <Head>
      <title>
        Dannecker's | {id}
      </title>
    </Head>
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
        image={require("assets/img/examples/bottles.svg")}
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
              <div className={classes.brand}>
                <h1 className={classes.title}>{id}</h1>
                <h4>Free delivery for purchases over $50!</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {renderItem()}
      </div>

      <MyFooter />
    </div>
  );
}
