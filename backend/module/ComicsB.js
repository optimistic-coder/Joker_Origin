const express = require("express");
const router = express.Router();
const passport = require("passport");

const comics = require("../schema/comics");

router.post(
  "/upload-blog",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.body) {
      res.json(500);
    }
    var comicss = new comics();
    comicss.name = req.body.name;
    comicss.video = req.body.video;

    comicss.save().then(post => res.json(post));
  }
);

router.get("/blogs", (req, res) => {
  comics.find().then(post => res.json(post));
});
module.exports = router;
