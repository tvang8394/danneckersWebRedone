import fetch from "isomorphic-unfetch";

export default async function payOrder(req, res) {
  const {
    query: { orderId, source, email },
  } = req;

  const payment = {
    email: email,
    source: source,
  };
  let jsonPayment = JSON.stringify(payment);
  // console.log(jsonOrder);
  const response = await fetch(`https://scl.clover.com/v1/orders/${orderId}/pay`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    },
    body: jsonPayment,
  });
  const data = await response.json();
  console.log(data);
  console.log(orderId + source + email);
}
