const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = admin = mongoose.model("admin", UserSchema);
