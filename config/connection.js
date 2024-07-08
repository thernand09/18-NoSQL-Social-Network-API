// Import necessary modules from Mongoose
const { connect, connection } = require('mongoose');

// Define the connection string for MongoDB
const connectionString =
process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

// Connect to MongoDB using the specified connection string
connect(connectionString);

// Export the default connection object from Mongoose
module.exports = connection;