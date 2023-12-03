const totalPageCount = require("../db/totalPageCount");
const userFindbyFilter = require("../db/userFindbyFilter");

const getFilteredUserService = async (page, filterData) => {
  const totalPages = await totalPageCount(filterData);
  const pageSize = 20;
  const pageCount = Math.ceil(totalPages / pageSize);
  const filteredUser = await userFindbyFilter(page, pageSize, filterData);
  const filteredUserList = {
    filteredUser: filteredUser,
    pageCount: pageCount,
    pageNumber: page,
  };
  return filteredUserList;
};

module.exports = getFilteredUserService;
