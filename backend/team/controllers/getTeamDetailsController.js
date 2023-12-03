const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getTeamDetailsService = require("../services/getTeamDetailsService");

const getTeamDetailsController = asyncErrorHandler(async (req, res) => {
  // const { id } = req.params;
  const teamDetails = await getTeamDetailsService();

  res
    .status(FETCH_SUCCESS.status)
    .send({ teamDetails: teamDetails, message: FETCH_SUCCESS.message });
});

module.exports = getTeamDetailsController;
