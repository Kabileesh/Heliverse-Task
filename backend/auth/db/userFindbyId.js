const { User } = require("../model/userModel");

const userFindbyId = async (id) => {
  const user = await User.find({id : id});
  return user;
};

module.exports = userFindbyId;
