/**
 * EXPRESS.JS SERVER SETUP FOR DEVCAMP API
 * This file creates a basic Express.js server with CRUD routes for bootcamps
 */

// STEP 1: IMPORTING REQUIRED MODULES
// Express is a web framework for Node.js that helps us create web servers easily
const express = require("express");
// Dotenv allows us to load environment variables from a .env file
const dotenv = require("dotenv");

// STEP 2: LOADING ENVIRONMENT VARIABLES
// This tells dotenv where to find our environment variables file
// Environment variables store sensitive data like ports, database URLs, API keys
dotenv.config({ path: "./config/config.env" });

// STEP 3: CREATING THE EXPRESS APPLICATION
// This creates an instance of an Express application
// Think of 'app' as our web server that can handle HTTP requests
const app = express();

/**
 * ROUTING SECTION
 * Routes define what happens when a user visits different URLs
 * Each route has: HTTP method (GET, POST, PUT, DELETE) + URL path + callback function
 */

// ROOT ROUTE - What happens when someone visits the home page "/"
app.get("/", (req, res) => {
  // req = request object (contains info about the incoming request)
  // res = response object (what we send back to the client)
  
  // Different ways to send responses (examples commented out):
  // res.send("<h1>Hello from express</h1>")  // Send HTML
  // res.send({name : "William Asante"})       // Send object
  // res.json({name : 'William Asante'});      // Send JSON
  
  // Send JSON response with HTTP status code
  // 400 = Bad Request status code
  res.status(400).json({ success: false });
});

/**
 * BOOTCAMP API ROUTES
 * These routes handle CRUD operations for bootcamps
 * CRUD = Create, Read, Update, Delete
 */

// GET ALL BOOTCAMPS
// URL: GET /api/v1/bootcamps
// Purpose: Retrieve a list of all bootcamps
app.get("/api/v1/bootcamps", (req, res) => {
  // 200 = OK status code (request successful)
  res.status(200).json({ 
    success: true, 
    message: 'Show all bootcamps' 
  });
});

// GET SINGLE BOOTCAMP BY ID
// URL: GET /api/v1/bootcamps/123 (where 123 is the ID)
// :id is a route parameter - it can be any value
app.get("/api/v1/bootcamps/:id", (req, res) => {
  // req.params.id contains the ID from the URL
  // Note: Missing template literal backticks in original message
  res.status(200).json({ 
    success: true, 
    message: `Show bootcamp ${req.params.id}` 
  });
});

// CREATE NEW BOOTCAMP
// URL: POST /api/v1/bootcamps
// Purpose: Add a new bootcamp to the database
app.post("/api/v1/bootcamps", (req, res) => {
  // In a real app, we'd get bootcamp data from req.body
  res.status(200).json({ 
    success: true, 
    message: 'Create new bootcamp' 
  });
});

// UPDATE EXISTING BOOTCAMP
// URL: PUT /api/v1/bootcamps/123 (where 123 is the ID to update)
// PUT is used for updating entire resources
app.put("/api/v1/bootcamps/:id", (req, res) => {
  // Template literal (backticks) allows us to insert variables into strings
  res.status(200).json({ 
    success: true, 
    message: `Update bootcamp ${req.params.id}` 
  });
});

// DELETE BOOTCAMP
// URL: DELETE /api/v1/bootcamps/123 (where 123 is the ID to delete)
app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: `Delete bootcamp ${req.params.id}` 
  });
});

/**
 * SERVER STARTUP SECTION
 */

// STEP 4: SETTING THE PORT
// Try to use PORT from environment variables, fallback to 3000 if not set
// || means "OR" - if first value is falsy, use the second value
const PORT = process.env.PORT || 3000;

// STEP 5: STARTING THE SERVER
// This makes our server listen for incoming requests on the specified port
app.listen(PORT, () => {
  // This callback function runs when the server successfully starts
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

/**
 * PROJECT NOTES AND FUTURE ROUTE STRUCTURE
 */

// INSTALLATION COMMANDS USED:
// npm init                 - Create package.json
// npm i express dotenv     - Install Express and Dotenv
// npm i -D nodemon        - Install Nodemon as dev dependency

// GIT SETUP:
// git init                - Initialize git repository
// Create .gitignore       - Specify files/folders to ignore in version control

// PLANNED API ROUTE STRUCTURE:
// /api/v1/bootcamps       - Bootcamp operations
// /api/v1/courses         - Course operations  
// /api/v1/reviews         - Review operations
// /api/v1/auth            - Authentication
// /api/v1/users           - User management

// WHY /v1 IN ROUTES?
// Version numbering allows us to make breaking changes in v2
// while keeping v1 working for existing clients

