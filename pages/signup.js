/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import { create } from "nouislider";
const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
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
      .then((user) => {
        if (user) {
          var newUser = firebase.auth().currentUser;
          newUser
            .updateProfile({
              displayName: `${firstName + " " + lastName}`,
            })
            .then(() => {
              //update success
              dispatch(userSignIn(user));
            });
          Router.push("/danneckers");
          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
        }
      });
    const createCustomer = await fetch(
      `/api/createCustomer/${firstName}/${lastName}/${address}/${city}/${state}/${zip}/${email}`
    );
    const response = await createCustomer.json();
    console.log(response);
  };
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
                      {/** 
                      <div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>
                        {` `}

                        <Button justIcon round color="facebook">
                          <i
                            className={classes.socials + " fab fa-facebook-f"}
                          />
                        </Button>
                        {` `}
                        <h4 className={classes.socialTitle}>or be classical</h4>
                      </div>
                      */}

                      <form className={classes.form}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "First Name",
                            value: firstName,
                            onChange: (e) => {
                              setFirstName(e.target.value);
                            },
                            name: "firtName",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "Last Name",
                            value: lastName,
                            onChange: (e) => {
                              setLastName(e.target.value);
                            },
                            name: "lastName",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            type: "email",
                            placeholder: "Email...",
                            name: "email",
                            value: email,
                            onChange: (e) => {
                              setEmail(e.target.value);
                            },
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <HouseIcon
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "Address",
                            value: address,
                            onChange: (e) => {
                              setAddress(e.target.value);
                            },
                            name: "address",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <LocationCityIcon
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "City",
                            value: city,
                            onChange: (e) => {
                              setCity(e.target.value);
                            },
                            name: "city",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <LocationOnIcon
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "State",
                            value: state,
                            onChange: (e) => {
                              setState(e.target.value);
                            },
                            name: "state",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <PublicIcon
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            type: "text",
                            placeholder: "Zip",
                            value: zip,
                            onChange: (e) => {
                              setZip(e.target.value);
                            },
                            name: "zip",
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            type: "password",
                            placeholder: "Password...",
                            value: password,
                            onChange: (e) => {
                              setPassword(e.target.value);
                            },
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the{" "}
                              <a href="#pablo">terms and conditions</a>.
                            </span>
                          }
                        />

                        <div className={classes.textCenter}>
                          <Button round color="primary" onClick={handleSubmit}>
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
