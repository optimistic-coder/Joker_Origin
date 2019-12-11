const express = require("express");
const router = express.Router();
var fs = require("fs");
var multer = require("multer");
var upload = multer();
const quotes = require("../schema/quotes");
const passport = require("passport");

router.post(
  "/upload",
  upload.single("file"),
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    if (!req.file) {
      res.status(500);
      res.send("errors");
    }
    var walls = new quotes();

    walls.img.data = req.file.buffer;
    walls.img.contenType = req.file.mimetype;
    walls.save();
    res.send("Done");
  }
);
router.get("/quotes", (req, res) => {
  quotes.find().then(post => res.json(post));
});
module.exports = router;
