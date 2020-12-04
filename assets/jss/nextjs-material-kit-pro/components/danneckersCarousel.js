import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Muted from "components/Typography/Muted.js";
import Warning from "components/Typography/Warning.js";
import amazon from "../../../img/amazon.svg";
import deli from "../../../img/deli.svg";

import testimonialsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js";

const useStyles = makeStyles(testimonialsStyle);

export default function DannckersCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      {/* Testimonials 2 START */}
      <div
        className={
          classes.testimonials +
          " " +
          classes.sectionDark +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <img src={amazon} style={{'border-radius': '10px'}}/>
                </div>
                <div>
                  <img src={deli}  style={{'border-radius': '10px'}}/>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </>
  );
}
