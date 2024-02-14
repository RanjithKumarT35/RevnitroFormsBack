const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const carConsultationSchema = new mongoose.Schema(
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
    carType: {
      type: String,
    },
    carBrand: {
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
    collection: "carConsultation",
  }
);

module.exports = mongoose.model("carConsultation", carConsultationSchema);
