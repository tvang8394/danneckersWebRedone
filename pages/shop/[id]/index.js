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
import Button from "components/CustomButtons/Button.js";

import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionProducts from "pages-sections/ecommerce/SectionProducts.js";

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";
import {
  getBeerItems,
  getLiquorItems,
  getWineItems,
  getGroceryNonTaxItems,
} from "../../api/getItems";

const useStyles = makeStyles(styles);

export async function getServerSideProps() {
  const beer = await getBeerItems();
  const liquor = await getLiquorItems();
  const wine = await getWineItems();
  const groceryNonTax = await getGroceryNonTaxItems();
  return {
    props: {  beer, liquor, wine, groceryNonTax },
  };
}

export default function EcommercePage({

  beer,
  liquor,
  wine,
  groceryNonTax,
}) {
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
                <h1 className={classes.title}>Shop</h1>
                <h4>Free delivery for purchases over $50!</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {renderItem()}
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
