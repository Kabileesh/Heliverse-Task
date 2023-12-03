const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { UPDATE_SUCCESS } = require("../../Utils/constants");
const updateUserService = require("../services/updateUserService");

const updateUserController = asyncErrorHandler(async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, gender, domain, available } = req.body;
  const updatedUserData = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    domain: domain,
    available: available,
  };
  const updatedUser = updateUserService(id, updatedUserData);

  res
    .status(UPDATE_SUCCESS.status)
    .send({ updatedUser: updatedUser, message: UPDATE_SUCCESS.message });
});

module.exports = updateUserController;
