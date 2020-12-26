const Clover = require("clover-ecomm-sdk");

export default async (req, res) => {
  let ENVIRONMENT = "production";
  const cloverInst = new Clover(process.env.CLOVER_KEY, {
    environment: ENVIRONMENT,
  });


  const myOrder = {
    currency: "usd",
    customer: "test123",
    email: "sample@sample.com",
    items: [
      {
        amount: 1358,
        currency: "usd",
        description: "Lemon cupcake with blackberry frosting",
        quantity: 2,
        tax_rates: { name: "Sale", rate: 1000000 },
      },
    ],
    shipping: {
      address: {
        city: "st.paul",
        country: "US",
        line1: "123 test ave",
        postal_code: "55106",
        state: "Minnesote",
      },
      name: 'Tom Vang'
    },
  };

  let jsonOrder = JSON.stringify(myOrder);
  // //   console.log(jsonOrder)

  let order = await cloverInst.orders.create(jsonOrder);

  console.log(order);

};
