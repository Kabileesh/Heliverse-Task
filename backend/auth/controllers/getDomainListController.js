const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getDomainListService = require("../services/getDomainListService");

const getDomainListController = asyncErrorHandler(async (req, res) => {
  const domainList = await getDomainListService();

  res
    .status(FETCH_SUCCESS.status)
    .send({ domainList: domainList, message: FETCH_SUCCESS.message });
});

module.exports = getDomainListController;
