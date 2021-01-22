/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import AttachMoney from "@material-ui/icons/AttachMoney";
import HouseIcon from "@material-ui/icons/House";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import MyFooter from "../components/MyFooter";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import { useDispatch } from "react-redux";
import storeFront from "assets/img/storeFront.svg";
import { loadFirebase } from "../components/Firebase";
import { userSignIn } from "../store/actions/userAction";
import Router from "next/router";
import { useFormik } from "formik";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  // const [checked, setChecked] = React.useState([1]);
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [address, setAddress] = React.useState("");
  // const [city, setCity] = React.useState("");
  // const [state, setState] = React.useState("");
  // const [zip, setZip] = React.useState("");
  const dispatch = useDispatch();
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const handleSubmit = async () => {
    let firebase = loadFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const createCustomer = await fetch(
            `/api/createCustomer/${firstName}/${lastName}/${address}/${city}/${state}/${zip}/${email}`
          );
          const response = await createCustomer.json();
          console.log(response);
          var newUser = firebase.auth().currentUser;
          newUser
            .updateProfile({
              displayName: `${firstName + " " + lastName}`,
            })
            .then(() => {
              //update success
              dispatch(userSignIn(user, response.id));
            });
          Router.push("/danneckers");
          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
        }
      });
    // const createCustomer = await fetch(
    //   `/api/createCustomer/${firstName}/${lastName}/${address}/${city}/${state}/${zip}/${email}`
    // );
    // const response = await createCustomer.json();
    // console.log(response);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.zipCode) {
      errors.zipCode = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.password = "Needs at least 6 characters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      password: "",
    },
    validate,

    onSubmit: async (values) => {
      let firebase = loadFirebase();
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(async (user) => {
          if (user) {
            const createCustomer = await fetch(
              `/api/createCustomer/${values.firstName}/${values.lastName}/${values.address}/${values.city}/${values.state}/${values.zipCode}/${values.email}`
            );
            const response = await createCustomer.json();
            var newUser = firebase.auth().currentUser;
            newUser
              .updateProfile({
                displayName: `${values.firstName + " " + values.lastName}`,
              })
              .then(() => {
                //update success
                dispatch(userSignIn(user, response.id));
              });
            Router.push("/danneckers");
          }
        });
    },
  });

  return (
    <div>
      <Header
        absolute
        color="dark"
        brand="Danneckers Liquor & Grocery"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + storeFront + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2
                  className={classes.cardTitle}
                  style={{ marginBottom: "44px" }}
                >
                  Dannecker's Sign Up Form
                </h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Exclusive Deals"
                        description="Get deals sent only to members"
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Save your Order"
                        description="Check out faster with saved orders!"
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Earn Rewards"
                        description="Earn points on every penny that you spend here"
                        icon={AttachMoney}
                        iconColor="success"
                      />
                    </GridItem>

                    <GridItem xs={12} sm={5} md={5}>
                      <form
                        className={classes.form}
                        onSubmit={formik.handleSubmit}
                      >
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.firstName}
                          onBlur={formik.handleBlur}
                          name="firstName"
                          id="firstName"
                          label="First Name"
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Face />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.lastName}
                          onBlur={formik.handleBlur}
                          name="lastName"
                          id="lastName"
                          type="text"
                          label="Last Name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Face />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.lastName}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.email}
                          onBlur={formik.handleBlur}
                          name="email"
                          id="email"
                          label="Email"
                          type="email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.address}
                          onBlur={formik.handleBlur}
                          name="address"
                          id="address"
                          label="Address"
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <HouseIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.address}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.city}
                          onBlur={formik.handleBlur}
                          name="city"
                          id="city"
                          label="City"
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationCityIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.city && formik.errors.city ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.city}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.state}
                          onBlur={formik.handleBlur}
                          name="state"
                          id="state"
                          label="State"
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationOnIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.state && formik.errors.state ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.state}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.zipCode}
                          onBlur={formik.handleBlur}
                          name="zipCode"
                          id="zipCode"
                          label="Zip Code"
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PublicIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.zipCode && formik.errors.zipCode ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.zipCode}
                          </div>
                        ) : null}
                        <TextField
                          className={classes.margin}
                          onChange={formik.handleChange}
                          value={formik.password}
                          onBlur={formik.handleBlur}
                          name="password"
                          id="password"
                          type="password"
                          label="Password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Check />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.password}
                          </div>
                        ) : null}
                        <div className={classes.textCenter}>
                          <Button round color="primary" type="submit">
                            Get started
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <MyFooter />
      </div>
    </div>
  );
}
