// SSL certificate files
// const privateKey = fs.readFileSync(
//   "/home4/exper2e1/ssl/keys/ec-e3e97217a3_9f886bfdc71192eafb29aceb19f7d737.key",
//   "utf8"
// );
// const certificate = fs.readFileSync(
//   "/home4/exper2e1/ssl/certs/ec-expertcaadvisors_com_e3e97217a3_1728205107_5e165ab2acdca379971cf4c89b48cbd0.crt",
//   "utf8"
// );
// const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server
// const httpsServer = https.createServer(credentials, app);

// Start server
// httpsServer.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import fs from "fs";
// import https from "https";

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://expert-ca-advisors.vercel.app",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

// Email sending endpoint
app.post("/send-email", (req, res) => {
  console.log("Received request:", req.body); // Log the request body

  const { name, number, email, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
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
      console.error("Error sending email:", error); // Log the error
      return res.status(500).send("Failed to send message. Please try again.");
    }
    console.log("Email sent:", info.response); // Log the response
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

