const Team = require("../model/teamModel");

const createTeam = async (teamName, teamMembers) => {
  const newTeam = new Team({
    teamName: teamName,
    teamMembers: teamMembers,
  });
  const createdTeam = await newTeam.save();
  return createdTeam;
};

module.exports = createTeam;
