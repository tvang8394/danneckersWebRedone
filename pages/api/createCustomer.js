import fetch from "isomorphic-unfetch";
const Clover = require("clover-ecomm-sdk");

export default async (req, res) => {
  const response = await fetch( `https://api.clover.com/v3/merchants/${process.env.CLIENT_ID}/customers/?access_token=${process.env.CLOVER_KEY}`)
  const data = await response.json()
  res.send(data)
  console.log(data)
};
