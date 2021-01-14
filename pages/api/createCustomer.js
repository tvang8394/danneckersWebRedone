import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const newCustomer = {
    addresses: [
      {
        address1: "671 Jenks Ave",
        city: "st.paul",
        country: "United States",
        phoneNumber: "6513326236",
        state: "MN",
        zip: "55106",
      },
    ],
    emailAddresses: [{ customer: {}, emailAddress: "tvang8394@gmail.com" }],
    firstName: "Tom",
    lastName: "Vang",
    marketingAllowed: true,
  };

  const jsonNewCustomer = JSON.stringify(newCustomer);

  const response = await fetch(
    `https://api.clover.com/v3/merchants/${process.env.NEXT_PUBLIC_CLIENT_ID}/customers/?access_token=${process.env.NEXT_PUBLIC_CLOVER_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: jsonNewCustomer,
      },
    }
  );
  const data = await response.json();
  res.send(data);
  console.log(data);
};
