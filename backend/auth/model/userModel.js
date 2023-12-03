const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1",
  },
  domain: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };
