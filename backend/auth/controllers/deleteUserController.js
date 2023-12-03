const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { DELETE_SUCCESS } = require("../../Utils/constants");
const deleteUserService = require("../services/deleteUserService");

const deleteUserController = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  await deleteUserService(id);

  res.send(DELETE_SUCCESS.status).send(DELETE_SUCCESS.message);
});

module.exports = deleteUserController;
