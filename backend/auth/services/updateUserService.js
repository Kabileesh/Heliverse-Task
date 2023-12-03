const { UNAUTHORIZED } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const updateUser = require("../db/updateUser");
const userFindbyId = require("../db/userFindbyId");

const updateUserService = async (id, updatedUserData) => {
  if (!userFindbyId(id)) {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  }
  const updatedUser = await updateUser(id, updatedUserData);
  return updatedUser;
};

module.exports = updateUserService;
