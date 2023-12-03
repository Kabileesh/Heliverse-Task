require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const CustomError = require("./Utils/customError");
const globalErrorHandler = require("./Utils/globalErrorHandler");
const { NOT_FOUND } = require("./Utils/constants");
const authRouter = require("./auth/router/routes");
const teamRouter = require("./team/router/routes");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);
app.use(teamRouter);

app.all("*", (req, res, next) => {
  const error = new CustomError(NOT_FOUND.message, NOT_FOUND.status);
  next(error);
});

app.use(globalErrorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started and db connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
