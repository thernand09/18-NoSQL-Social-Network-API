// Import necessary modules from Mongoose
const { connect, connection } = require('mongoose');

// Define the connection string for MongoDB
connect('mongodb://localhost/social-network-api');

// Export the default connection object from Mongoose
module.exports = connection;