const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const technicalJobSchema = new mongoose.Schema(
  {
    jobPosition: {
      type: String,
    },
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    candidateName: {
      type: String,
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
    folio: {
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
    collection: "technicalJob",
  }
);

module.exports = mongoose.model("technicalJob", technicalJobSchema);
