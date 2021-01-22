import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const {
    query: { itemId },
  } = req;

  try {
    const response = await fetch(
      `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/tax_rates/${itemId}?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`
    );
    const data = await response.json();
    console.log(data)
    res.send(data);
  } catch {}
};
