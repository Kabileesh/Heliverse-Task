const { User } = require("../model/userModel");

const updateUser = async (id, updatedUserData) => {
  const updatedUser = await User.findOneAndUpdate(id, updatedUserData);
  return updatedUser;
};

module.exports = updateUser;
