const Team = require("../model/teamModel");

const teamFindbyId = async (id) => {
  const team = await Team.find({ id: id });
  return team;
};

module.exports = teamFindbyId;
