const mongoose = require("mongoose");

// table
const DaySchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  day: Number,
});
const Day = mongoose.model("day", DaySchema);
module.exports = Day;
