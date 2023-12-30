const { randomBetween } = require("../service/functions");

let performance = null;
let traffic = null;
let detectors = null;
let protectors = null;

const updateData = () => {
  performance = randomBetween(8, 26);
  traffic = randomBetween(0, 5);
  detectors = randomBetween(0, 5);
  protectors = randomBetween(0, 5);
};

const get_performance = (req, res) => {
  res.status(200).json({ performance });
};

const get_model_traffic = (req, res) => {
  res.status(200).json({ traffic, detectors, protectors });
};

setInterval(updateData, 1000);

module.exports = {
  get_performance,
  get_model_traffic,
};
