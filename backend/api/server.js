/* eslint-disable no-undef */
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  try {
    console.log("Request headers:", req.headers);
    console.log("Request body:", req.body);

    const { name, number, email, message } = req.body;

    // Implement input validation here

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Avoid logging this in production
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shivanshgtb@gmail.com",
      subject: `Message from ${name}`,
      text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message. Please try again.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
