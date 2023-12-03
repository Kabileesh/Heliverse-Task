const express = require("express");
const loadUserDataController = require("../controllers/loadUserDataController");
const getUserbyIdController = require("../controllers/getUserbyIdController");
const createUserController = require("../controllers/createUserController.");
const updateUserController = require("../controllers/updateUserController");
const deleteUserController = require("../controllers/deleteUserController");
const getFilteredUserController = require("../controllers/getFilteredUserController");
const getDomainListController = require("../controllers/getDomainListController");

const authRouter = express.Router();

authRouter.get("/users", getFilteredUserController);
authRouter.get("/users/:id", getUserbyIdController);
authRouter.post("/users", createUserController);
authRouter.put("/users/:id", updateUserController);
authRouter.delete("/users/:id", deleteUserController);
authRouter.get("/domain-list", getDomainListController);
authRouter.post("/load-user-data", loadUserDataController);

module.exports = authRouter;
