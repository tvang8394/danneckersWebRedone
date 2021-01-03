import fetch from "isomorphic-unfetch";

export default async function createOrder(req, res) {
  const {
    query: { total },
  } = req;

  console.log(total)
  const myOrder = {
    currency: "USD",
    total: total,
    state: "Open",
  };

  let jsonOrder = JSON.stringify(myOrder);
  // //   console.log(jsonOrder)
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/orders/?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonOrder,
    }
  );
  // let order = await cloverInst.orders.create(jsonOrder);
  const data = await response.json();
  console.log(data.id);
  res.send(data)
}
