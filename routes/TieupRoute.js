const express = require("express");
var router = express.Router();
const {
  getAllTieups,
  createTieup,
  updateTieupById,
  deleteTieupById,
  assignTask,
  getTieup,
  deleteAllTieups,
} = require("../controllers/TieupsController");
router.get("/getOne", getTieup);
router.get("/getAll", getAllTieups);
router.post("/create", createTieup);
router.put("/update", updateTieupById);
router.put("/addTask", assignTask);
router.delete("/delete", deleteTieupById);
router.delete("/deleteAll", deleteAllTieups);
module.exports = router;
