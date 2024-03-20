// mongodbConfig.js
// const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb+srv://admin:admin@todolist.euuhel0.mongodb.net/?retryWrites=true&w=majority'; 

// const MONGODB_OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection failed: ', err));

// module.exports = mongoose;

require("dotenv").config()

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.DIALECT,
  KEY_NAME: process.env.KEY_NAME,
  mainUrl: process.env.MAIN_URL,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000
  }
}



// require('dotenv').config();

// module.exports = {
//   HOST: process.env.HOST,
//   USER: process.env.USER,
//   PASSWORD: process.env.PASSWORD,
//   DB: process.env.DB,
//   dialect: process.env.DIALECT,
//   KEY_NAME: process.env.KEY_NAME,
//   mainUrl: process.env.MAIN_URL,

//   pool: {
//     max: process.env.POOL_MAX,
//     min: process.env.POOL_MIN,
//     idle: process.env.POOL_IDLE,
//     acquire: process.env.POOL_ACQUIRE
//   }
// }
