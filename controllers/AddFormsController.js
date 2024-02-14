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

const addCarConsultation = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      location,
      address,
      carType,
      carBrand,
      questions,
      slot,
      status,
    } = await req.body;
    const newCarConsultation = new carConsultation({
      customerName: customerName,
      phone: phone,
      email: email,
      location: location,
      address: address,
      carType: carType,
      carBrand: carBrand,
      questions: questions,
      slot: slot,
      status: status,
    });
    if (await newCarConsultation.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addBikeConsultation = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      location,
      address,
      bikeType,
      bikeBrand,
      questions,
      slot,
      status,
    } = await req.body;
    const newBikeConsultation = new bikeConsultation({
      customerName: customerName,
      phone: phone,
      email: email,
      location: location,
      address: address,
      bikeType: bikeType,
      bikeBrand: bikeBrand,
      questions: questions,
      slot: slot,
      status: status,
    });
    if (await newBikeConsultation.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addBikeService = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      location,
      address,
      bikeName,
      bikeModel,
      issue,
      serviceLocation,
      status,
      assignedTo,
      assignedLocation,
    } = await req.body;
    const newBikeService = new bikeService({
      customerName: customerName,
      phone: phone,
      email: email,
      location: location,
      address: address,
      bikeName: bikeName,
      bikeModel: bikeModel,
      issue: issue,
      serviceLocation: serviceLocation,
      status: status,
      assignedTo: assignedTo,
      assignedLocation: assignedLocation,
    });
    if (await newBikeService.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addCarService = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      location,
      address,
      carName,
      carModel,
      issue,
      serviceLocation,
      status,
      assignedTo,
      assignedLocation,
    } = await req.body;
    const newCarService = new carService({
      customerName: customerName,
      phone: phone,
      email: email,
      location: location,
      address: address,
      carName: carName,
      carModel: carModel,
      issue: issue,
      serviceLocation: serviceLocation,
      status: status,
      assignedTo: assignedTo,
      assignedLocation: assignedLocation,
    });
    if (await newCarService.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addECUTuning = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      location,
      address,
      bikeName,
      bikeModel,
      issue,
      serviceLocation,
      status,
      assignedTo,
      assignedLocation,
    } = await req.body;
    const newECUTuning = new ecuTuning({
      customerName: customerName,
      phone: phone,
      email: email,
      location: location,
      address: address,
      bikeName: bikeName,
      bikeModel: bikeModel,
      issue: issue,
      serviceLocation: serviceLocation,
      status: status,
      assignedTo: assignedTo,
      assignedLocation: assignedLocation,
    });
    if (await newECUTuning.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addJoinRacing = async (req, res) => {
  try {
    const {
      riderName,
      age,
      phone,
      email,
      location,
      address,
      purpose,
      trackExperience,
      racingClass,
      status,
    } = await req.body;
    const newJoinRacing = new joinRacing({
      riderName: riderName,
      age: age,
      phone: phone,
      email: email,
      location: location,
      address: address,
      purpose: purpose,
      trackExperience: trackExperience,
      racingClass: racingClass,
      status: status,
    });
    if (await newJoinRacing.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addOwnershipReview = async (req, res) => {
  try {
    const { riderName, phone, vehicleDetails, status } = await req.body;
    const newOwnershipReview = new ownershipReview({
      riderName: riderName,
      phone: phone,
      vehicleDetails: vehicleDetails,
      status: status,
    });
    if (await newOwnershipReview.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addProductionJob = async (req, res) => {
  try {
    const {
      jobPosition,
      candidateName,
      age,
      phone,
      email,
      location,
      address,
      folio,
      status,
    } = await req.body;
    const newProductionJob = new productionJob({
      jobPosition: jobPosition,
      candidateName: candidateName,
      age: age,
      phone: phone,
      email: email,
      location: location,
      address: address,
      folio: folio,
      status: status,
    });
    if (await newProductionJob.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addTechnicalJob = async (req, res) => {
  try {
    const {
      jobPosition,
      candidateName,
      age,
      phone,
      email,
      location,
      address,
      folio,
      status,
    } = await req.body;
    const newTechnicalJob = new technicalJob({
      jobPosition: jobPosition,
      candidateName: candidateName,
      age: age,
      phone: phone,
      email: email,
      location: location,
      address: address,
      folio: folio,
      status: status,
    });
    if (await newTechnicalJob.save()) {
      const content = `your reqest has been received`;
      sendMail(email, "Request Received", content);
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCarConsultation,
  addBikeConsultation,
  addCarService,
  addBikeService,
  addECUTuning,
  addJoinRacing,
  addOwnershipReview,
  addProductionJob,
  addTechnicalJob,
};
