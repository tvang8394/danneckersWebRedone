import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "@material-ui/core";
import contentStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";
import danneckersSign from "assets/img/assets-for-demo/presentationViewSectionComponent/danneckerSign.svg";
import danneckerRewards from "assets/img/assets-for-demo/presentationViewSectionComponent/danneckerRewards.svg";
import danneckerLiquor from "assets/img/assets-for-demo/presentationViewSectionComponent/danneckerLiquor.svg";

import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg";
import { useSelector } from "react-redux";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const { user } = useSelector((state) => state.user);
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              {user ? (
                <h3 className={classes.title}>Your Deals</h3>
              ) : (
                <h3 className={classes.title}>Sign up for a Free account!</h3>
              )}
              <h6 className={classes.description}>Quick and Easy!</h6>
              {user ? (
                <h5>
                  Welcome back {user.user.displayName}! Here are your avaliable
                  deals! Thank You for shopping at Danneckers!
                </h5>
              ) : (
                (<h3 className={classes.description}>
                  Here at Danneckers Grocery & Liquor Store, we care about our
                  customers, neighbors, and communities! Without them, there
                  wouldn't be us. To show our gratitude, we are now offering a
                  customer loyalty reward program. You can now earn points on
                  every penny that they spend here and can be redeemed towards a
                  future purchase!
                </h3>)
              )}
            </div>
            {user ? <Button>View Deals</Button> : <Button>Sign Up</Button>}
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                className={classes.ipadImg}
                src={danneckersSign}
                alt="Danneckers Sign"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
