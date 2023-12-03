const { UNAUTHORIZED } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const deleteUser = require("../db/deleteUser");
const userFindbyId = require("../db/userFindbyId");

const deleteUserService = async (id) => {
  if (!userFindbyId(id)) {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  }
  await deleteUser(id);
  return true;
};

module.exports = deleteUserService;
