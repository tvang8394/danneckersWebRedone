import React from "react";
import "assets/css/payment.module.css";
import Head from "next/head";
import { useEffect } from "react";
export default function SimpleContainer() {
  useEffect(() => {
    const clover = new Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC);
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
      console.log(`cardNumber changed ${JSON.stringify(event)}`);
    });

    cardNumber.addEventListener("blur", function (event) {
      console.log(`cardNumber blur ${JSON.stringify(event)}`);
    });

    cardDate.addEventListener("change", function (event) {
      console.log(`cardDate changed ${JSON.stringify(event)}`);
    });

    cardDate.addEventListener("blur", function (event) {
      console.log(`cardDate blur ${JSON.stringify(event)}`);
    });

    cardCvv.addEventListener("change", function (event) {
      console.log(`cardCvv changed ${JSON.stringify(event)}`);
    });

    cardCvv.addEventListener("blur", function (event) {
      console.log(`cardCvv blur ${JSON.stringify(event)}`);
    });

    cardPostalCode.addEventListener("change", function (event) {
      console.log(`cardPostalCode changed ${JSON.stringify(event)}`);
    });

    cardPostalCode.addEventListener("blur", function (event) {
      console.log(`cardPostalCode blur ${JSON.stringify(event)}`);
    });

    // Listen for form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Use the iframe's tokenization method with the user-entered card details
      clover.createToken().then(function (result) {
        if (result.errors) {
          Object.values(result.errors).forEach(function (value) {
            displayError.textContent = value;
          });
        } else {
          cloverTokenHandler(result.token);
        }
      });
    });

    //function that deals with token so send token to Firebase here?
    function cloverTokenHandler(token) {
      // Insert the token ID into the form so it gets submitted to the server
      var form = document.getElementById("payment-form");
      var hiddenInput = document.createElement("input");
      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("name", "cloverToken");
      hiddenInput.setAttribute("value", token);
      form.appendChild(hiddenInput);
      alert(token);
      // form.submit();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Danneckers | Payment</title>
      </Head>
      <div className="container">
        <form action="/charge" method="post" id="payment-form">
          {/* <div class="form-row top-row">
            <div id="amount" class="field card-number">
              <input name="amount" placeholder="Amount" />
            </div>
          </div> */}

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
            <div class="input-errors" id="card-date-errors" role="alert"></div>
          </div>

          <div class="form-row">
            <div id="card-cvv" class="field third-width"></div>
            <div class="input-errors" id="card-cvv-errors" role="alert"></div>
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
            <button>Submit Payment</button>
          </div>
        </form>
      </div>
    </>
  );
}
