const express = require("express");
const router = express.Router();
var fs = require("fs");
var multer = require("multer");
var upload = multer();
const wallpaper = require("../schema/wallpaper");
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
    var walls = new wallpaper();

    walls.img.data = req.file.buffer;
    walls.img.contenType = req.file.mimetype;
    walls.save();
    res.send("Done");
  }
);
router.get("/wallpaper", (req, res) => {
  wallpaper.find().then(post => res.json(post));
});
module.exports = router;
