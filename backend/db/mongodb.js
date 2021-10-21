const { connect } = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnectionURL = process.env.DB_LINK;

const connectDB = async () => {
  try {
    const conn = await connect(dbConnectionURL, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
