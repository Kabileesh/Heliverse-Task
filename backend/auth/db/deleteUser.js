const { User } = require("../model/userModel");

const deleteUser = async (id) => {
  await User.findOneAndDelete({id : id});
  return true;
};

module.exports = deleteUser;
