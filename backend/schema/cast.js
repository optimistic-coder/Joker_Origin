const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  cast: {
    name: String,
    description: String,
    born: String,
    shows: String,
    awards: String,
    video: String,
    img:String
  }
});
module.exports = CastM = mongoose.model("CastM", schema);
