const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer();
const passport = require("passport");
const cast = require("../schema/cast");
router.post(
  "/upload-cast",
  upload.single("file"),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.file) {
      res.json(500);
    }
    var casts = new cast();
    casts.img.data = req.file.buffer;
    casts.img.contenType = req.file.mimetype;

    casts.cast.name = req.body.name;
    casts.cast.description = req.body.description;
    casts.cast.born = req.body.born;
    casts.cast.shows = req.body.shows;
    casts.cast.awards = req.body.awards;
    casts.cast.video = req.body.video;

    casts.save().then(post => {
      res.json(post);
    });
  }
);
router.get("/cast", (req, res) => {
  cast.find().then(post => res.json(post));
});
//movies
const movie = require("../schema/movie");
router.post(
  "/upload-movie",
  upload.single("file"),
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    if (!req.file) {
      res.json(500);
    }
    var movies = new movie();
    movies.img.data = req.file.buffer;
    movies.img.contenType = req.file.mimetype;

    movies.movie.name = req.body.name;
    movies.movie.imdb = req.body.imdb;
    movies.movie.box_office = req.body.box_office;
    movies.movie.date = req.body.date;
    movies.movie.director = req.body.director;
    movies.movie.music_director = req.body.music_director;
    movies.movie.budget = req.body.budget;
    movies.movie.video = req.body.video;

    movies.save().then(post => {
      res.json(post);
    });
  }
);
router.get("/movies", (req, res) => {
  movie.find().then(post => res.json(post));
});
module.exports = router;
