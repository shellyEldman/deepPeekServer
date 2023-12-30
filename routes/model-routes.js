const express = require("express");
const modelController = require("../controllers/model-controllers");

const router = express.Router();

router.get("/getPerformance", modelController.get_performance);
router.get("/getModelTraffic", modelController.get_model_traffic);

module.exports = router;
