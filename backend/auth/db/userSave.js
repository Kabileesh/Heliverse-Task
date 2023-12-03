const { User } = require("../model/userModel");

const userSave = async (
  id,
  firstName,
  lastName,
  email,
  gender,
  domain,
  available
) => {
  const newUser = new User({
    id: id,
    first_name: firstName,
    last_name: lastName,
    email: email,
    gender: gender,
    domain: domain,
    available: available,
  });
  await newUser.save();
  return newUser;
};

module.exports = userSave;
