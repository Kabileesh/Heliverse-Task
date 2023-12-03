const getDomainList = require("../db/domainList");

const getDomainListService = async () => {
  const domainList = await getDomainList();
  return domainList;
};

module.exports = getDomainListService;
