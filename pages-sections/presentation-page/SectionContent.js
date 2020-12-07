import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from '@material-ui/core';
import contentStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";
import danneckersSign from "assets/img/assets-for-demo/presentationViewSectionComponent/danneckerSign.svg";
import danneckerRewards from 'assets/img/assets-for-demo/presentationViewSectionComponent/danneckerRewards.svg'
import danneckerLiquor from 'assets/img/assets-for-demo/presentationViewSectionComponent/danneckerLiquor.svg'

import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Sign up for a Free account!</h3>
              <h6 className={classes.description}>Quick and Easy!</h6>
              <h5 className={classes.description}>
                Become a member so you can earn rewards, save
                favorite orders and make payment easier. You'll also get
                exclusive membership deals!
              </h5>
            </div>
            <Button>Sign Up</Button>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={danneckerLiquor}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={danneckerRewards}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src={danneckersSign}
                alt="iPad"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
