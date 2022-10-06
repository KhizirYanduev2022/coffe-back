const mongoose = require('mongoose')

const coffeSchema = mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean,
  caffeine: Boolean,
  volume: Number,
  description: String

  
  });
  
  const Coffe = mongoose.model('Coffe', coffeSchema);
  
  module.exports = Coffe;