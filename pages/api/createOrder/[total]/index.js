import fetch from 'isomorphic-unfetch';

export default async function createOrder(req, res)  {
    
  const myOrder = {
    currency: "USD",
    total: 599,
    state: "Open"
  };

  let jsonOrder = JSON.stringify(myOrder);
  // //   console.log(jsonOrder)
  const response = await fetch( `https://api.clover.com/v3/merchants/${process.env.CLIENT_ID}/orders/?access_token=${process.env.CLOVER_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonOrder
  })
  // let order = await cloverInst.orders.create(jsonOrder);
  const data = await response.json();
  console.log(data);

};
