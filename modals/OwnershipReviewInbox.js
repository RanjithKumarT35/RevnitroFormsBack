const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ownershipReviewSchema = new mongoose.Schema(
  {
    riderName: {
      type: String,
    },
    referenceNumber: {
      type: String,
      default: uuidv4(),
    },
    phone: {
      type: Number,
    },
    vehicleDetails: {
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
    collection: "ownershipReview",
  }
);

module.exports = mongoose.model("ownershipReview", ownershipReviewSchema);
