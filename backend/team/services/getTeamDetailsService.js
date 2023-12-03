const findAllTeam = require("../db/getAllTeam");

const getTeamDetailsService = async () => {
  const teamDetails = await findAllTeam();
  return teamDetails;
};

module.exports = getTeamDetailsService;
