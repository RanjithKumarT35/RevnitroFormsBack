const mongoose = require("mongoose");

const tieupSchema = new mongoose.Schema(
  {
    tieupName: {
      type: String,
    },
    tieupType: {
      type: String,
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
    assignedTask: [
      {
        inboxId: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
  {
    collection: "tieup",
  }
);

module.exports = mongoose.model("tieup", tieupSchema);
