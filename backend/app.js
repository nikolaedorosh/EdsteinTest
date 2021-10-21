const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./db/mongodb");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
// set config for static file in express
app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on ${PORT}`);
});
module.exports = app;
