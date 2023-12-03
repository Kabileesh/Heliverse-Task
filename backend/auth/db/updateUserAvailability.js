const { User } = require("../model/userModel");

const updateUserAvailability = async (_id) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: _id },
    { available: false }
  );
  return updatedUser;
};

module.exports = updateUserAvailability;
