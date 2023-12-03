const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { CREATED_SUCCESS } = require("../../Utils/constants");
const createUserService = require("../services/createUserService");

const createUserController = asyncErrorHandler(async (req, res) => {
  const { firstName, lastName, email, gender, domain, available } =
    req.body;
  const newUser = await createUserService(
    firstName,
    lastName,
    email,
    gender,
    domain,
    available
  );

  res
    .status(CREATED_SUCCESS.status)
    .send({ newUser: newUser, message: CREATED_SUCCESS.message });
});

module.exports = createUserController;
