const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb+srv://jjang051:12345678!!@cluster0.ngz7rbw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
  })
  .then(() => {
    console.log("db연결");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
