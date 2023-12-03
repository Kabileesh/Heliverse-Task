const updateUserAvailability = require("../../auth/db/updateUserAvailability");
const createTeam = require("../db/createTeam");

const createTeamService = async (teamName, teamMembers) => {
  let updatedTeamMembers = [];

  const updatePromises = teamMembers.map(async (user) => {
    return await updateUserAvailability(user._id);
  });

  updatedTeamMembers = await Promise.all(updatePromises);

  const newTeam = await createTeam(teamName, updatedTeamMembers);
  return newTeam;
};

module.exports = createTeamService;
