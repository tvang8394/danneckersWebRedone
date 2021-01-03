import fetch from "isomorphic-unfetch";

export default async function createLineItem(req, res) {
  const {
    query: { orderId },
  } = req;

  console.log(orderId);

  const myOrder = {
    item: { id: "VB5KQKWF05Q20" },
  };

  let jsonOrder = JSON.stringify(myOrder);
  //   console.log(jsonOrder)
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/orders/${orderId}/line_items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonOrder,
    }
  );
  const data = await response.json();
  console.log(data)
}
