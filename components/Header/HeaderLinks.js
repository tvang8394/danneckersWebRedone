/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link href="/shop/Beer">
          <Button
            color={"white"}
            target="_blank"
            className={classes.navButton}
            round
            style={{ marginRight: "20px" }}
          >
            Beer
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/shop/Liquor">
          <Button
            color={"white"}
            target="_blank"
            className={classes.navButton}
            round
            style={{ marginRight: "20px" }}
          >
            Liquor
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/shop/Wine">
          <Button
            color={"white"}
            target="_blank"
            className={classes.navButton}
            round
            style={{ marginRight: "20px" }}
          >
            Wine
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/shop/Grocery">
          <Button
            color={"white"}
            target="_blank"
            className={classes.navButton}
            round
            style={{ marginRight: "20px" }}
          >
            Grocery
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Hidden mdDown>
          <Button
            href="/shopping-cart"
            color={"white"}
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> Check Out
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            href="/"
            color={"info"}
            target="_blank"
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> buy now
          </Button>
        </Hidden>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
