const fetch = require("isomorphic-unfetch");

export default async function getItem(req, res) {
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  {
    console.log(process.env.NEXT_PUBLIC_CLIENT_ID);
  }
  const items = await response.json();

  return items['elements'];
}

export async function getBeerItems(req, res) {
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/categories/${process.env.BEER}/items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const items = await response.json();
  return items["elements"];
}

export async function getLiquorItems(req, res) {
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/categories/${process.env.LIQUOR}/items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const items = await response.json();
  return items["elements"];
}

export async function getWineItems(req, res) {
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/categories/${process.env.WINE}/items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const items = await response.json();
  return items["elements"];
}

export async function getGroceryNonTaxItems(req, res) {
  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/categories/${process.env.GROCERY_NONTAX}/items?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const items = await response.json();
  return items["elements"];
}
