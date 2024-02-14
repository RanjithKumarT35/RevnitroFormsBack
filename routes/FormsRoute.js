const express = require("express");
const {
  addCarConsultation,
  addBikeConsultation,
  addCarService,
  addBikeService,
  addECUTuning,
  addJoinRacing,
  addOwnershipReview,
  addProductionJob,
  addTechnicalJob,
} = require("../controllers/AddFormsController");
const {
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
} = require("../controllers/getFormsController");

const {
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
} = require("../controllers/DeleteFormsController");
const { updateStatus } = require("../controllers/UpdateFormsController");
var router = express.Router();
//getAll
router.get("/allCarService", getAllCarService);
router.get("/allBikeService", getAllBikeService);
router.get("/allCarConsultation", getAllCarConsultation);
router.get("/allBikeConsultation", getAllBikeConsultation);
router.get("/allEcuTuning", getAllECUTuning);
router.get("/allJoinRacing", getAllJoinRacing);
router.get("/allOwnershipReview", getAllOwnershipReview);
router.get("/allProductionJob", getAllProductionJob);
router.get("/alltechnicalJob", getAllTechnicalJob);
//get
router.get("/carService", getCarService);
router.get("/bikeService", getBikeService);
router.get("/carConsultation", getCarConsultation);
router.get("/bikeConsultation", getBikeConsultation);
router.get("/ecuTuning", getECUTuning);
router.get("/joinRacing", getJoinRacing);
router.get("/ownershipReview", getOwnershipReview);
router.get("/productionJob", getProductionJob);
router.get("/technicalJob", getTechnicalJob);
//post
router.post("/carService", addCarService);
router.post("/bikeService", addBikeService);
router.post("/carConsultation", addCarConsultation);
router.post("/bikeConsultation", addBikeConsultation);
router.post("/ecuTuning", addECUTuning);
router.post("/joinRacing", addJoinRacing);
router.post("/ownershipReview", addOwnershipReview);
router.post("/productionJob", addProductionJob);
router.post("/technicalJob", addTechnicalJob);
router.post("/statusUpdate", updateStatus);
//delete
router.delete("/carService", deleteCarService);
router.delete("/bikeService", deleteBikeService);
router.delete("/carConsultation", deleteCarConsultation);
router.delete("/bikeConsultation", deleteBikeConsultation);
router.delete("/ecuTuning", deleteECUTuning);
router.delete("/joinRacing", deleteJoinRacing);
router.delete("/ownershipReview", deleteOwnershipReview);
router.delete("/productionJob", deleteProductionJob);
router.delete("/technicalJob", deleteTechnicalJob);
//deleteAll
router.delete("/allCarService", deleteAllCarService);
router.delete("/allBikeService", deleteAllBikeService);
router.delete("/allCarConsultation", deleteAllCarConsultation);
router.delete("/allBikeConsultation", deleteAllBikeConsultation);
router.delete("/allEcuTuning", deleteAllECUTuning);
router.delete("/allJoinRacing", deleteAllJoinRacing);
router.delete("/allOwnershipReview", deleteAllOwnershipReview);
router.delete("/allProductionJob", deleteAllProductionJob);
router.delete("/allTechnicalJob", deleteAllTechnicalJob);

module.exports = router;
