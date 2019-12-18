const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer();
var fs = require("fs");
const passport = require("passport");
const cast = require("../schema/cast");
var multiparty = require("connect-multiparty"),
multipartyMiddleware = multiparty();
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: "KEY_OF_YOUR_AWS",
  secretAccessKey: "SECRET_KEY_AWS"
});
router.route("/upload-cast").post(
  multipartyMiddleware,
  (req, res) => {
    var file = req.files.file;
    fs.readFile(file.path, function(err, data) {
      if(err) {
        console.log(err)
      } 
      var casts = new cast();
      var url;
     
      const params = {
        Bucket: 'castinfo', // pass your bucket name
       Key: req.files.file.originalFilename, // file will be saved as testBucket/contacts.csv
        Body: data
    }
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
          if(data){
            url=data.Location
            casts.cast.img=url
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
     });
    });
  }
);
router.get("/cast", (req, res) => {
  cast.find().then(post => res.json(post));
});
//movies
const movie = require("../schema/movie");



router.route("/upload-movie").post(
  multipartyMiddleware,
  (req, res) => {
    var file = req.files.file;
    fs.readFile(file.path, function(err, data) {
      if(err) {
        console.log(err)
      } 
      var movies = new movie();
      var url;
     
      const params = {
        Bucket: 'movie71', // pass your bucket name
       Key: req.files.file.originalFilename, // file will be saved as testBucket/contacts.csv
        Body: data
    }
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
          if(data){
            url=data.Location
            movies.movie.img=url
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
     });
    });
  }
);
 router.get("/movies", (req, res) => {
  movie.find().then(post => res.json(post));
});
module.exports = router;
