var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  img: {
    data: String,
  }
});

// our model
module.exports = quotes = mongoose.model("quotes", schema);
