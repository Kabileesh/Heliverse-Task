const { User } = require("../model/userModel");

const userFindbyFilter = async (page, pageSize, filterData) => {
  const filteredUser = await User.find(filterData)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  return filteredUser;
};

module.exports = userFindbyFilter;
