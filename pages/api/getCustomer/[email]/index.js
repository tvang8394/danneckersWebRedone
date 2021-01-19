import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const {
    query: { email },
  } = req;

  try {
    const response = await fetch(
      `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/customers?filter=emailAddress=${email}&access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`
    );
    const data = await response.json();
    const customerId = await data["elements"][0].id;
    const customerObj = {
      customerId: customerId,
    };
    res.send(customerObj);
  } catch (error) {
    console.log(error.msg);
  }
};
