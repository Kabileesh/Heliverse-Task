const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { CREATED_SUCCESS } = require("../../Utils/constants");
const createTeamService = require("../services/createTeamService");

const createTeamController = asyncErrorHandler(async (req, res) => {
  const { teamName, teamMembers } = req.body;
  const createdTeam = await createTeamService(teamName, teamMembers);

  res
    .status(CREATED_SUCCESS.status)
    .send({ team: createdTeam, message: CREATED_SUCCESS.message });
});

module.exports = createTeamController;
