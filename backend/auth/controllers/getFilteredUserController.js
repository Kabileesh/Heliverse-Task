const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getFilteredUserService = require("../services/getFilteredUserService");

const getFilteredUserController = asyncErrorHandler(async (req, res) => {
  const page = req.query.page;
  const filterData = req.query.filterData;

  const filteredUserList = await getFilteredUserService(page, filterData);

  res.status(FETCH_SUCCESS.status).send({
    filteredUserDetails: filteredUserList,
    message: FETCH_SUCCESS.message,
  });
});

module.exports = getFilteredUserController;
