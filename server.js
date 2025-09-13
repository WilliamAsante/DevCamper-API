// To begin our simple express server
// We created our package.json by using npm init
// We install express by using npm i express dotenv
// We then install nodemon using npm i -D nodemon

// We call express module
const express = require("express");
const dotenv = require("dotenv");

// We create a config.env
// We then put in there variables eg. PORT = 5000,NODE_ENV = development
// In order to use those variables, we load env vars

dotenv.config({ path: "./config/config.env" });

// To create our express server, we initialize our app variable with express
const app = express();

// To run the server we call .listen
// We need to pass a port so we use the one from the the env file
const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// We then initialize a git repository with git init
// We then create a .gitignore file
// This helps us remove files and folders we don't want pushed into our repo
