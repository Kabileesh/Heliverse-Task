const fs = require("fs");
const path = require("path");
const loadUserData = require("../db/loadUserData");

const filePath = path.resolve(
  __dirname,
  "../../others/heliverse_mock_data.json"
);
const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const loadUserDataService = async () => {
  jsonData.forEach(async (data) => {
    loadUserData(data);
  });
};

module.exports = loadUserDataService;
