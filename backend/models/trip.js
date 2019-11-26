const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//database structure
const TripSchema = new Schema(
  {
    destination: String,
    dateFrom: Date,
    dateTo: Date
  },
  { timestamps: true }
);
module.exports = mongoose.model("Trip", TripSchema);
