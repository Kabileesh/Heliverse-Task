const mongoose = require("mongoose");
const { userSchema } = require("../../auth/model/userModel");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamMembers: [{ type: userSchema, id: false }],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
