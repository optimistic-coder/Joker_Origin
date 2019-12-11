const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  movie: {
    name: String,
    imdb: Number,
    box_office: String,
    date: String,
    director: String,
    budget: String,
    music_director: String,
    video: String
  },
  img: {
    data: Buffer,
    contenType: String
  }
});
module.exports = CastM = mongoose.model("movie", schema);
