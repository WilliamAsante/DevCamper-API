/**
 * EXPRESS.JS SERVER SETUP FOR DEVCAMP API
 * This file sets up an Express.js server, connects to MongoDB,
 * and defines basic routes for the API.
 */

// STEP 1: IMPORT NEEDED MODULES
const express = require("express");     
// Express is the main web framework we’ll use to create our API

const dotenv = require("dotenv");       
// Dotenv allows us to use environment variables (like DB passwords, PORT, etc.)
// Environment variables help keep sensitive information out of the code

const morgan = require("morgan");       
// Morgan is middleware that logs details of incoming requests (method, URL, status, time)

const connectDB = require("./config/db");
// This is our custom function to connect to MongoDB

// STEP 2: LOAD ENVIRONMENT VARIABLES
dotenv.config({ path: "./config/config.env" });
// This looks inside config.env and loads variables into process.env
// Example: process.env.PORT or process.env.MONGO_URI

// Connect to the MongoDB database before starting the server
connectDB();

// STEP 3: IMPORT ROUTE FILES
const bootcamps = require("./routes/bootcamps");
// This will handle all requests for /api/v1/bootcamps

// STEP 4: CREATE EXPRESS APPLICATION
const app = express();
// The 'app' object is basically our server. We’ll add routes and middleware to it.

// Use Morgan logger only in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  // This makes it easy to see requests while testing
}

// MOUNT ROUTERS
// Any request starting with /api/v1/bootcamps will be forwarded
// to the bootcamps router we imported above
app.use("/api/v1/bootcamps", bootcamps);

// STEP 5: DEFINE BASIC ROUTE
app.get("/", (req, res) => {
  // req → the request from the client (browser, Postman, etc.)
  // res → the response we send back to the client

  // Here we’re just sending a simple JSON response with status code 400
  res.status(400).json({ success: false });
});

// STEP 6: START THE SERVER
const PORT = process.env.PORT || 3000;
// First tries to use the port in .env, otherwise defaults to 3000

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

// STEP 7: HANDLE UNHANDLED PROMISE REJECTIONS
// Example: If MongoDB connection fails, that’s a rejected promise
// This makes sure the app doesn’t just crash silently
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process (1 = exit with failure)
  server.close(() => process.exit(1));
});

/**
 * EXTRA NOTES:
 *
 * - Installation commands:
 *   npm init              → Create package.json
 *   npm i express dotenv  → Install Express & Dotenv
 *   npm i -D nodemon      → Dev dependency for auto-restart
 *
 * - Planned routes:
 *   /api/v1/bootcamps, /courses, /reviews, /auth, /users
 *
 * - Why /v1 in routes?
 *   It allows us to release version 2 later without breaking version 1.
 */
