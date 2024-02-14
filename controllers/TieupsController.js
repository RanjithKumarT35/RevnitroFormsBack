const Tieup = require("../modals/tieups");
const carService = require("../modals/CarServiceInbox");
const bikeService = require("../modals/BikeServiceInbox");
const carConsultation = require("../modals/CarConsultationInbox");
const bikeConsultation = require("../modals/BikeConsultationInbox");
const ecuTuning = require("../modals/EcuTuningInbox");
const joinRacing = require("../modals/JoinRacingInbox");
const ownershipReview = require("../modals/OwnershipReviewInbox");
const productionJob = require("../modals/ProductionJobInbox");
const technicalJob = require("../modals/TechnicalJobInbox");
const { sendMail } = require("./SendMail");
const { sendMailWithPDF } = require("./SendMailWithPdf");

// Get all tieups
const getAllTieups = async (req, res) => {
  try {
    const tieups = await Tieup.find();
    res.status(200).json(tieups);
  } catch (error) {
    console.error("Error getting tieups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a tieup
const getTieup = async (req, res) => {
  try {
    const { tieupId } = req.body;
    const tieup = await Tieup.findById({ _id: tieupId });
    res.status(200).json(tieup);
  } catch (error) {
    console.error("Error getting tieups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new tieup
const createTieup = async (req, res) => {
  try {
    const { tieupName, tieupType, phone, email, location, address } =
      await req.body;

    const newTieup = await new Tieup({
      tieupName: tieupName,
      tieupType: tieupType,
      phone: phone,
      email: email,
      location: location,
      address: address,
    });
    res.status(200).json(newTieup);
  } catch (error) {
    console.error("Error creating tieup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a tieup by ID
const updateTieupById = async (req, res) => {
  try {
    const { tieupId, tieupName, tieupType, phone, email, location, address } =
      await req.body;
    const updatedTieup = await Tieup.findByIdAndUpdate(
      tieupId,
      {
        tieupName: tieupName,
        tieupType: tieupType,
        phone: phone,
        email: email,
        location: location,
        address: address,
      },
      {
        new: true,
      }
    );
    if (!updatedTieup) {
      return res.status(404).json({ message: "Tieup not found" });
    }
    res.status(200).json(updatedTieup);
  } catch (error) {
    console.error("Error updating tieup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Assign a task to the tieup
const assignTask = async (req, res) => {
  try {
    const { tieupId, inboxId } = await req.body;
    const updatedTieup = await Tieup.findByIdAndUpdate(
      tieupId,
      { $push: { assignedTask: { inboxId: inboxId } } },
      { new: true }
    );
    if (!updatedTieup) {
      return res.status(404).json({ message: "Tieup not found" });
    }
    res.status(200).json(updatedTieup);
  } catch (error) {
    console.error("Error updating tieup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a tieup by ID
const deleteTieupById = async (req, res) => {
  try {
    const { tieupId } = req.body.id;
    const deletedTieup = await Tieup.findByIdAndDelete(tieupId);
    if (!deletedTieup) {
      return res.status(404).json({ message: "Tieup not found" });
    }
    res.status(200).json({ message: "Tieup deleted successfully" });
  } catch (error) {
    console.error("Error deleting tieup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete all a tieup
const deleteAllTieups = async (req, res) => {
  try {
    await Tieup.deleteMany({}); // Deletes all documents in the Tieup collection
    res.status(200).json({ message: "All tieups deleted successfully" });
  } catch (error) {
    console.error("Error deleting tieups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getTieup,
  getAllTieups,
  createTieup,
  assignTask,
  updateTieupById,
  deleteTieupById,
  deleteAllTieups,
};
