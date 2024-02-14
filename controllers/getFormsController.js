const carService = require("../modals/CarServiceInbox");
const bikeService = require("../modals/BikeServiceInbox");
const carConsultation = require("../modals/CarConsultationInbox");
const bikeConsultation = require("../modals/BikeConsultationInbox");
const ecuTuning = require("../modals/EcuTuningInbox");
const joinRacing = require("../modals/JoinRacingInbox");
const ownershipReview = require("../modals/OwnershipReviewInbox");
const productionJob = require("../modals/ProductionJobInbox");
const technicalJob = require("../modals/TechnicalJobInbox");

const getAllCarService = async (req, res) => {
  try {
    const carServiceRequest = await carService.find();
    if (!carServiceRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(carServiceRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllBikeService = async (req, res) => {
  try {
    const bikeServiceRequest = await bikeService.find();
    if (!bikeServiceRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(bikeServiceRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllBikeConsultation = async (req, res) => {
  try {
    const bikeConsultationRequest = await bikeConsultation.find();
    if (!bikeConsultationRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(bikeConsultationRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllCarConsultation = async (req, res) => {
  try {
    const carConsultationRequest = await carConsultation.find();
    if (!carConsultationRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(carConsultationRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllECUTuning = async (req, res) => {
  try {
    const ecuTuningRequest = await ecuTuning.find();
    if (!ecuTuningRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(ecuTuningRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllJoinRacing = async (req, res) => {
  try {
    const joinRacingRequest = await joinRacing.find();
    if (!joinRacingRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(joinRacingRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllOwnershipReview = async (req, res) => {
  try {
    const ownershipReviewRequest = await ownershipReview.find();
    if (!ownershipReviewRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(ownershipReviewRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllProductionJob = async (req, res) => {
  try {
    const productionJobRequest = await productionJob.find();
    if (!productionJobRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(productionJobRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllTechnicalJob = async (req, res) => {
  try {
    const technicalJobRequest = await technicalJob.find();
    if (!technicalJobRequest) {
      res.status(200).json({ NoRequests: "No Requests Available" });
    }
    res.status(200).json(technicalJobRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCarService = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const carServiceRequest = await carService.findById({ _id: reqestID });
    if (!carServiceRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(carServiceRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getBikeService = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const bikeServiceRequest = await bikeService.findById({ _id: reqestID });
    if (!bikeServiceRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(bikeServiceRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getBikeConsultation = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const bikeConsultationRequest = await bikeConsultation.findById({
      _id: reqestID,
    });
    if (!bikeConsultationRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(bikeConsultationRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCarConsultation = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const carConsultationRequest = await carConsultation.findById({
      _id: reqestID,
    });
    if (!carConsultationRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(carConsultationRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getECUTuning = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const ecuTuningRequest = await ecuTuning.findById({ _id: reqestID });
    if (!ecuTuningRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(ecuTuningRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getJoinRacing = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const joinRacingRequest = await joinRacing.findById({ _id: reqestID });
    if (!joinRacingRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(joinRacingRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getOwnershipReview = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const ownershipReviewRequest = await ownershipReview.findById({
      _id: reqestID,
    });
    if (!ownershipReviewRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(ownershipReviewRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getProductionJob = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const productionJobRequest = await productionJob.findById({
      _id: reqestID,
    });
    if (!productionJobRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(productionJobRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getTechnicalJob = async (req, res) => {
  try {
    const reqestID = await req.body.id;
    const technicalJobRequest = await technicalJob.findById({ _id: reqestID });
    if (!technicalJobRequest) {
      res.status(200).json({ NoRequest: "No Request Available" });
    }
    res.status(200).json(technicalJobRequest);
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAllCarConsultation,
  getAllBikeConsultation,
  getAllCarService,
  getAllBikeService,
  getAllECUTuning,
  getAllJoinRacing,
  getAllOwnershipReview,
  getAllProductionJob,
  getAllTechnicalJob,
  getCarConsultation,
  getBikeConsultation,
  getCarService,
  getBikeService,
  getECUTuning,
  getJoinRacing,
  getOwnershipReview,
  getProductionJob,
  getTechnicalJob,
};
