const { User } = require("../model/userModel");

const getDomainList = async () => {
  const domainList = await User.distinct("domain");
  return domainList;
};

module.exports = getDomainList;
