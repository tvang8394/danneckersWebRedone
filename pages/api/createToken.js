import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  fetch("https://token-sandbox.dev.clover.com/v1/tokens", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: "false",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};
