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

const deleteAllCarService = async (req, res) => {
  try {
    await carService.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllBikeService = async (req, res) => {
  try {
    await bikeService.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllCarConsultation = async (req, res) => {
  try {
    await carConsultation.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllBikeConsultation = async (req, res) => {
  try {
    await bikeConsultation.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllECUTuning = async (req, res) => {
  try {
    await ecuTuning.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllJoinRacing = async (req, res) => {
  try {
    await joinRacing.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllOwnershipReview = async (req, res) => {
  try {
    await ownershipReview.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllProductionJob = async (req, res) => {
  try {
    await productionJob.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteAllTechnicalJob = async (req, res) => {
  try {
    await technicalJob.deleteMany({});
    res
      .status(200)
      .json({ message: "All car service requests deleted successfully" });
  } catch (error) {
    console.error("Error deleting car service requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCarConsultation = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await carConsultation.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBikeConsultation = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await bikeConsultation.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCarService = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await carService.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBikeService = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await bikeService.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteECUTuning = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await ecuTuning.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteJoinRacing = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await joinRacing.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteOwnershipReview = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await ownershipReview.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteProductionJob = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await productionJob.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteTechnicalJob = async (req, res) => {
  try {
    const requestId = req.body.id;
    const deletedService = await technicalJob.findByIdAndDelete(requestId);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  deleteAllCarConsultation,
  deleteAllBikeConsultation,
  deleteAllCarService,
  deleteAllBikeService,
  deleteAllECUTuning,
  deleteAllJoinRacing,
  deleteAllOwnershipReview,
  deleteAllProductionJob,
  deleteAllTechnicalJob,
  deleteCarConsultation,
  deleteBikeConsultation,
  deleteCarService,
  deleteBikeService,
  deleteECUTuning,
  deleteJoinRacing,
  deleteOwnershipReview,
  deleteProductionJob,
  deleteTechnicalJob,
};
