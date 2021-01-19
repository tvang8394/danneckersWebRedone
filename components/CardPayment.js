import React from "react";
import "../assets/css/payment.module.css";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: "5%",
      width: "90%",
    },
  },
}));

export default function CardPaymentTest({ clover }) {
  useEffect(() => {
    const elements = clover.elements();
    const styles = {
      body: {
        fontFamily: "Roboto, Open Sans, sans-serif",
        fontSize: "16px",
      },
      input: {
        fontSize: "16px",
      },
    };

    const form = document.getElementById("payment-form");

    const cardNumber = elements.create("CARD_NUMBER", styles);
    const cardDate = elements.create("CARD_DATE", styles);
    const cardCvv = elements.create("CARD_CVV", styles);
    const cardPostalCode = elements.create("CARD_POSTAL_CODE", styles);

    cardNumber.mount("#card-number");
    cardDate.mount("#card-date");
    cardCvv.mount("#card-cvv");
    cardPostalCode.mount("#card-postal-code");

    const cardResponse = document.getElementById("card-response");
    const displayCardNumberError = document.getElementById(
      "card-number-errors"
    );
    const displayCardDateError = document.getElementById("card-date-errors");
    const displayCardCvvError = document.getElementById("card-cvv-errors");
    const displayCardPostalCodeError = document.getElementById(
      "card-postal-code-errors"
    );

    // Handle real-time validation errors from the card element
    cardNumber.addEventListener("change", function (event) {
      displayCardNumberError.innerHTML = event.CARD_NUMBER.error || "";
    });

    cardNumber.addEventListener("blur", function (event) {
      displayCardNumberError.innerHTML = event.CARD_NUMBER.error || "";
    });

    cardDate.addEventListener("change", function (event) {
      displayCardDateError.innerHTML = event.CARD_DATE.error || "";
    });

    cardDate.addEventListener("blur", function (event) {
      displayCardDateError.innerHTML = event.CARD_DATE.error || "";
    });

    cardCvv.addEventListener("change", function (event) {
      displayCardCvvError.innerHTML = event.CARD_CVV.error || "";
    });

    cardCvv.addEventListener("blur", function (event) {
      displayCardCvvError.innerHTML = event.CARD_CVV.error || "";
    });

    cardPostalCode.addEventListener("change", function (event) {
      displayCardPostalCodeError.innerHTML = event.CARD_POSTAL_CODE.error || "";
    });

    cardPostalCode.addEventListener("blur", function (event) {
      displayCardPostalCodeError.innerHTML = event.CARD_POSTAL_CODE.error || "";
    });

    
  }, []);
  async function cloverTokenHandler(token, email) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById("payment-form");
    var hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "cloverToken");
    hiddenInput.setAttribute("value", token);
    form.appendChild(hiddenInput);
    // alert(token);
    // console.log(email)

    const sendPayment = await fetch(
      `/api/payOrder/${order.id}/${token}/${email}`
    );
    const paymentResponse = await sendPayment.json();
    console.log(paymentResponse);
    // form.submit();
  }
  const { order } = useSelector((state) => state.order);
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      email: "",
      zipCode: "",
    },
    onSubmit: (values) => {
      const displayCardSubmitError = document.getElementById(
        "card-submit-errors"
      );

      clover.createToken().then(function (result) {
        if (result.errors) {
          Object.values(result.errors).forEach(function (value) {
            displayCardSubmitError.innerText = value || "";
          });
        } else {
          return cloverTokenHandler(result.token, values.email);
        }
      });
    },
  });
  return (
    <>
      <Head>
        <title>Danneckers | Payment</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <>
            <h3>Shipping Information</h3>
            <form
              onSubmit={formik.handleSubmit}
              className={classes.root}
              autoComplete="off"
            >
              <TextField
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                label="Full Name"
              />
              <br />
              <TextField
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                label="Email"
              />
              <br />
              <TextField
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                label="Shipping Address"
              />
              <br />
              <TextField
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
                label="City"
              />
              <br />
              <TextField
                id="zipCode"
                name="zipCode"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.zipCode}
                label="Zip Code"
              />
            </form>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="container">
            <form onSubmit={formik.handleSubmit} id="payment-form">
              <div class="form-row top-row">
                <div id="card-number" class="field card-number"></div>
                <div
                  class="input-errors"
                  id="card-number-errors"
                  role="alert"
                ></div>
              </div>

              <div class="form-row">
                <div id="card-date" class="field third-width"></div>
                <div
                  class="input-errors"
                  id="card-date-errors"
                  role="alert"
                ></div>
              </div>

              <div class="form-row">
                <div id="card-cvv" class="field third-width"></div>
                <div
                  class="input-errors"
                  id="card-cvv-errors"
                  role="alert"
                ></div>
              </div>

              <div class="form-row">
                <div id="card-postal-code" class="field third-width"></div>
                <div
                  class="input-errors"
                  id="card-postal-code-errors"
                  role="alert"
                ></div>
              </div>

              <div id="card-response" role="alert"></div>

              <div class="button-container">
                <button type="submit">Submit Payment</button>
              </div>
              <div
                class="card-submit-errors"
                id="card-submit-errors"
                role="alert"
              ></div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
