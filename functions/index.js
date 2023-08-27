/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Nc6mpKLlG5oRVG9xJZ413f2zqABT3yHqSmcm3gMqSUcyMFF0FArYTGeHIBOgNtXaBrsohiAY5EUyeNdIhby0WpY001MX40pTL");

// API


// App config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// api routs
app.get("/", (request, response) => response.status(200).send("hello word"));
app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("payement request recieved", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});
// listen command
exports.api = functions.https.onRequest(app);

// exemple andpoint
// http://127.0.0.1:5001/clone-94b7e/us-central1/api
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
