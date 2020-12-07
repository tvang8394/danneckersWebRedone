const fetch = require("isomorphic-unfetch");

export default async (req, res) => {
  const response = await fetch(
    `https://api.clover.com/pakms/apikey?access_token=${process.env.CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const categories = await response.json();

  console.log(categories)
  res.json(categories);
};
