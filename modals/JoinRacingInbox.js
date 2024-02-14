const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const racingSchema = new mongoose.Schema(
  {
    riderName: {
      type: String,
    },
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    age: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    location: {
      type: String,
    },
    address: {
      type: String,
    },
    purpose: {
      type: String,
    },
    trackExperience: {
      type: String,
    },
    racingClass: {
      type: String,
    },
    status: {
      type: String,
      default: "NotViewed",
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "racing",
  }
);

module.exports = mongoose.model("racing", racingSchema);
