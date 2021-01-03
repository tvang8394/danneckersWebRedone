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
import { useSelector, useDispatch } from "react-redux";
import { loadFirebase } from "../Firebase";
import { userSignIn } from "../../store/actions/userAction";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const dispatch = useDispatch();

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
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const handleLogout = () => {
    let firebase = loadFirebase();
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        dispatch(userSignIn(null));
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  const itemsInCart = cart.length
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
        <Badge badgeContent={itemsInCart} color="secondary">
          <Button
            href="/shopping-cart"
            color={"white"}
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> Check Out
          </Button>
        </Badge>
      </ListItem>

      {user ? (
        <ListItem className={classes.listItem}>
          <Link href="/">
            <Button
              color={"white"}
              target="_blank"
              className={classes.navButton}
              round
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              View Account
            </Button>
          </Link>
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Link href="/login">
            <Button
              color={"white"}
              target="_blank"
              className={classes.navButton}
              round
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              Login
            </Button>
          </Link>
        </ListItem>
      )}

      {user ? (
        <ListItem className={classes.listItem}>
          <Button
            color={"white"}
            className={classes.navButton}
            round
            style={{ marginRight: "20px" }}
            onClick={handleLogout}
          >
            LogOut
          </Button>
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Link href="/signup">
            <Button
              color={"white"}
              target="_blank"
              className={classes.navButton}
              round
              style={{ marginRight: "20px" }}
            >
              Sign Up
            </Button>
          </Link>
        </ListItem>
      )}
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
