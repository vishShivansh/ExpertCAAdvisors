/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(
  cors({
    origin: "*", // Allow all origins. Adjust this as needed for your production environment.
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Email sending endpoint
app.post("/send-email", (req, res) => {
  console.log(req.body);
  const { name, number, email, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "shivanshgtb@gmail.com",
    subject: `Message from ${name}`,
    text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Failed to send message. Please try again.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
