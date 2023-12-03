const { User } = require("../model/userModel");

const totalPageCount = async (filterData) => {
  const totalPages = await User.countDocuments(filterData);
  return totalPages;
};

module.exports = totalPageCount;
