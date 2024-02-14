const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const bikeConsultationSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
    },
    referenceNumber: {
      type: String,
      default: uuidv4(),
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
    bikeType: {
      type: String,
    },
    bikeBrand: {
      type: String,
    },
    questions: {
      type: String,
    },
    slot: {
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
    collection: "bikeConsultation",
  }
);

module.exports = mongoose.model("bikeConsultation", bikeConsultationSchema);
