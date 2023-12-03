const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { LOAD_SUCCESS } = require("../../Utils/constants");
const loadUserDataService = require("../services/loadUserDataServices");

const loadUserDataController = asyncErrorHandler(async (req, res) => {
  await loadUserDataService();
  res.status(LOAD_SUCCESS.status).send(LOAD_SUCCESS.message);
});

module.exports = loadUserDataController;
