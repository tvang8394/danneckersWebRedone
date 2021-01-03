import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  try {
    const response = await fetch(
      `https://api.clover.com/v3/merchants/${process.env.CLIENT_ID}/orders/J7KA9KQ356Z2A?access_token=${process.env.CLOVER_KEY}`
    );
    const data = await response.json();
    console.log(data.customers);
    res.send(data)
  } catch {}

  // const myBody = {
  //   items: [{ amount: 25, currency: "usd", description: "Beer", quantity: 1 }],
  //   shipping: {
  //     address: {
  //       city: "st.paul",
  //       country: "United States",
  //       line1: "671 Jenks Ave",
  //       postal_code: "55106",
  //       state: "MN",
  //     },
  //     name: "Tom Vang",
  //     phone: "6513326236",
  //   },
  //   currency: "usd",
  //   email: "tvang8394@gmail.com",
  // };
  // const jsonBody = JSON.stringify(myBody);
  // try {
  //   const response = await fetch("https://api.clover.com/v1/orders", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.CLOVER_KEY}`,
  //     },
  //     body: myBody
  //   });
  //   console.log(jsonBody);
  // } catch {}
};
