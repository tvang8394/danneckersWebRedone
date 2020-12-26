import fetch from "isomorphic-unfetch";
const Clover = require("clover-ecomm-sdk");

export default async (req, res) => {
  let ACCESS_TOKEN = process.env.CLOVER_KEY;
  let ENVIRONMENT = process.env.NEXT_PUBLIC_CLOVER_PUBLIC;
  
  const cloverInst = new Clover(ACCESS_TOKEN, {
    environment: ENVIRONMENT
  });
  
  let order = cloverInst.orders.create({
      currency: 'usd',
      email:'sample.email@example.com',
      items:{
          'amount': 1358,
          'currency': 'usd',
          'description': 'Lemon cupcake with blackberry frosting',
          'quantity': 2,
          'tax_rates':{'name':'Sale','rate':1000000}
      }
  });
};
