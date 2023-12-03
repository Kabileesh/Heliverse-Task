const express = require("express");
const createTeamController = require("../controllers/createTeamController");
const getTeamDetailsController = require("../controllers/getTeamDetailsController");

const teamRouter = express.Router();

teamRouter.post("/team", createTeamController);
teamRouter.get("/team/:id", getTeamDetailsController);

module.exports = teamRouter;
