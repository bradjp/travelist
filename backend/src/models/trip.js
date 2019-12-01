const mongoose = require('mongoose');

const { Schema } = mongoose;

// database structure
const TripSchema = new Schema(
  {
    destination: String,
    dateFrom: Date,
    dateTo: Date,
    activities: Array,
    weather: Array,
    items: Array,
    packedItems: Array,
    user: Number,
  },
  { timestamps: true },
);
module.exports = mongoose.model('Trip', TripSchema);
