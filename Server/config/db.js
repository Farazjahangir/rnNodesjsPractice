const mongoose = require("mongoose");

const constants = require("./constants");

mongoose.connect(constants.DB_URL, { useNewUrlParser: true });

mongoose.set("useCreateIndex", true);

mongoose.connection
  .once("open", () => console.log("Database connected successfully"))
  .on("error", error => console.log("Error in DB =>", error));

module.exports = mongoose;