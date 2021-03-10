var nodemailer = require("nodemailer");

export default async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tvang8394@gmail.com",
      pass: "Python122!",
    },
  });

  var mailOptions = {
    from: "tvang8394@gmail.com",
    to: "tvang8394@gmail.com",
    subject: "Online Order",
    text: "Liquor, Wine, Beer!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
