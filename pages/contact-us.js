/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import MyFooter from "../components/MyFooter";
import Head from "next/head";
import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Danneckers | Contact-Page</title>
      </Head>
      <Header
        brand="Dannecker's Liquor & Grocery"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <div className={classes.bigMap}></div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  You can contact us with anything related to our Products. We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find us at"
                  description={<p>793 Randolf Ave, Saint Paul, MN, 55106 </p>}
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give us a ring"
                  description={
                    <p>
                      Dannecker's <br /> 651-222-7328 <br /> Mon - Sat / 9AM -
                      9PM & Sun / 11AM - 6PM
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
