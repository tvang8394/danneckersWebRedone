import fetch from "isomorphic-unfetch";

export default async function getAllLineItems(req, res) {
  const {
    query: { orderId },
  } = req;

  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/orders/${orderId}/line_items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`
  );
  const data = await response.json();
  res.send(data);
}
