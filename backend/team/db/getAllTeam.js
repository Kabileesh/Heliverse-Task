const Team = require("../model/teamModel");

const findAllTeam = async () => {
  const team = await Team.find();
  return team;
};

module.exports = findAllTeam;
