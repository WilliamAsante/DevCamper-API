// Import the mongoose library so we can interact with MongoDB
const mongoose = require("mongoose");

// Create an async function to connect to MongoDB
const connectDB = async () => {
  // Connect to MongoDB using the connection string stored in environment variables (MONGO_URI)
  // In Mongoose v6+, we don’t need extra options — defaults are already set
  const conn = await mongoose.connect(process.env.MONGO_URI);

  // If connection is successful, log the host (e.g. cluster address or localhost)
  console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
};

// Export the function so it can be used in other files
module.exports = connectDB;
