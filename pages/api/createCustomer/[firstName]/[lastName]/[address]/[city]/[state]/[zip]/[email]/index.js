import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const {
    query: { firstName, lastName, address, city, state, zip, email },
  } = req;

  const newCustomer = {
    addresses: [
      {
        address1: address,
        city: city,
        country: 'US',
        state: state,
        zip: zip,
      },
    ],
    emailAddresses: [{ customer: {}, emailAddress: email }],
    firstName: firstName,
    lastName: lastName,
  };

  const jsonNewCustomer = JSON.stringify(newCustomer);

  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/customers/?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonNewCustomer,
    }
  );
  const data = await response.json();
  res.send(data);
  console.log(data);
};
