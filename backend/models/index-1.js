// mongodbConfig.js
const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig.js');

const MONGODB_URI = 'mongodb://localhost:27017/yourmongodbname'; // Replace 'yourmongodbname' with your MongoDB database name

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed: ', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
