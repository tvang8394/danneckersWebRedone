import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const {
    query: { customerId },
  } = req;

  try {
    const response = await fetch(
      `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/orders?filter=customer.id=${customerId}&access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch {}
};
