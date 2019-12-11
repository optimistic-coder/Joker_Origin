var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  img: {
    data: Buffer,
    contenType: String
  }
});

// our model
module.exports = wallpaper = mongoose.model("wallpaper", schema);
