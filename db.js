const mongoose = require('mongoose');

require('dotenv').config()

let url = process.env.DB_KEY

connectMongo= async()=> {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectMongo;


