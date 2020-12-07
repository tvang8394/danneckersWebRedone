const Clover = require("clover-ecomm-sdk");

export default async (req, res) => {
  const cloverInst = new Clover(process.env.CLOVER_KEY, {
    environment: process.env.DEVELOPER_APP_UID,
  });

  const customer = await cloverInst.customers.create({
    email: "sample.email@example.com",
    source: "clv_1TSTSpbfbN6Jh5CqCm3bMQne",
    shipping: {
      address: {
        city: "Sunnyvale",
        state: "CA",
        line1: "415 N Mathilda Ave",
        postal_code: "94085",
      },
    },
    name: "test",
    phone: "555-0125",
  });
  console.log(customer);
};
