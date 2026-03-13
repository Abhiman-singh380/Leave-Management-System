const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  userId: String,
  fromDate: String,
  toDate: String,
  reason: String,
  status: {
    type: String,
    default: "PENDING"
  }
});

module.exports = mongoose.model("Leave", LeaveSchema);