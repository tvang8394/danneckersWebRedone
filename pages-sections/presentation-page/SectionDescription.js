import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              We invite you to come check out our selections. We have added a
              few new inventory, such as the growing popular spirit, Soju! Also,
              let us know your thoughts, concerns and/or suggestions about our
              innovation and upcoming plans.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title={`New Inventory`}
                description="Check out our new items like our Soju a popular drink from Korea!, Not looking for a drink? well you can use a snack from our Fresh Deli!"
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Now Offering Delivery!"
                description="Enjoy the convience of staying at home and ordering from us for same-day delivery(restricion). Stay home and stay safe and order Delivery!"
                icon={LocalShippingIcon}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Become a Member"
                description="Sign up for an account to get exclusive deals! and keep track of your orders!"
                icon={ContactPhoneIcon}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
