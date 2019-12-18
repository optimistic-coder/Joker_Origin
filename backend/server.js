const express = require("express");
const app = express();
const img = require("./module/img");
const CastM = require("./module/CastM");
const db = require("./config/keys_dev").mongoURI;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const JokerQuotes = require("./module/JokerQuotes");
const ComicsB = require("./module/ComicsB");
const admin = require("./module/admin");
const passport = require("passport");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("we sre cnnect with mongoose....");
  })
  .catch(err => {
    console.log(err);
  });
//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);
app.get("/", (req, res) => {
  res.send("welcome");
});
const port = process.env.PORT || 4000;
app.use("/module/img", img);
app.use("/module/JokerQuotes", JokerQuotes);
app.use("/module/CastM", CastM);
app.use("/module/ComicsB", ComicsB);
app.use("/module/admin", admin);
app.listen(port, () => {
  console.log("server is running........");
});
