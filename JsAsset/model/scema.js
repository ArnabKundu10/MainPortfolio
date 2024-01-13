const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("bufferCommands", true);
const messageStructure = new mongoose.Schema({
  FirstName: {
    type: String,
    uppercase: true,
  },
  LastName: {
    type: String,
    lowercase: true,
  },
  MobileNo: {
    type: Number,

    validate(val) {
      if (val < 0) {
        throw new Error("value can't be negative");
      }
    },
  },
  CollegeName: {
    type: String,
    uppercase: true,
  },
  MainMessage: {
    type: String,
    lowercase: true,
  },
});
const Message = new mongoose.model("Message", messageStructure);
module.exports = Message;
