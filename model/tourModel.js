const mongoose = require("mongoose");

// Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Model => convention to use Capital letter
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
