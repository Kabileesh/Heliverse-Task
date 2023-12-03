const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getUserbyIdService = require("../services/getUserbyIdService");

const getUserbyIdController = asyncErrorHandler(async (req, res) => {
  const id = req.params.id;
  const user = await getUserbyIdService(id);

  res.status(FETCH_SUCCESS.status).send({ user: user, message: FETCH_SUCCESS });
});

module.exports = getUserbyIdController;
