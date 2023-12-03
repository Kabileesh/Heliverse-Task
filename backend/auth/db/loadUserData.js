const { User } = require("../model/userModel");

const loadUserData = async (data) => {
  const newUser = await User(data);
  newUser.save();
};

module.exports = loadUserData;
