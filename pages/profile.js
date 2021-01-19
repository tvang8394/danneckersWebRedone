/*eslint-disable*/
import React from "react";
import Head from 'next/head';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

import ViewListIcon from "@material-ui/icons/ViewList";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import MyFooter from "../components/MyFooter";
import DisplayOrders from '../components/DisplayOrders';
import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";
import { useSelector } from "react-redux";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const { user } = useSelector((state) => state.user);

  return (
    <div>
    <Head>
      <title>Dannecker's | My Profile</title>
    </Head>
      <Header
        color="transparent"
        brand="Danneckers Liquor & Grocery"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title} style={{ color: "white" }}>
                    My Profile
                  </h3>
                  <h3 className={classes.title}>Name: {user.displayName}</h3>
                  <h3 className={classes.title}>Email: {user.email}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Orders",
                  tabIcon: ViewListIcon,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <DisplayOrders />
                      </GridContainer>
                    </div>
                  ),
                },
                // {
                //   tabButton: "Media",
                //   tabIcon: Camera,
                //   tabContent: (
                //     <GridContainer justify="center">
                //       <GridItem xs={12} sm={12} md={3}>
                //         <img
                //           alt="..."
                //           src={mariyaGeorgieva}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={clemOnojegaw}
                //           className={navImageClasses}
                //         />
                //       </GridItem>
                //       <GridItem xs={12} sm={12} md={3}>
                //         <img
                //           alt="..."
                //           src={clemOnojeghuo}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={oluEletu}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={cynthiaDelRio}
                //           className={navImageClasses}
                //         />
                //       </GridItem>
                //     </GridContainer>
                //   ),
                // },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
