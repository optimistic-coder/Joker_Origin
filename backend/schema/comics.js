const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  video: String
});
module.exports = comics = mongoose.model("comics", schema);
