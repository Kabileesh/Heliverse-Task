const userFindbyId = require("../db/userFindbyId");

const getUserbyIdService = async (id) => {
  const user = await userFindbyId(id);
  return user;
};

module.exports = getUserbyIdService;
