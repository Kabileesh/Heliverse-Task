const totalPageCount = require("../db/totalPageCount");
const userSave = require("../db/userSave");

const createUserService = async (
  firstName,
  lastName,
  email,
  gender,
  domain,
  available
) => {
  const id = (await totalPageCount()) + 1;
  const newUser = await userSave(
    id,
    firstName,
    lastName,
    email,
    gender,
    domain,
    available
  );

  return newUser;
};

module.exports = createUserService;
