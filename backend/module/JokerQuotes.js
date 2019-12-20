const express = require("express");
const router = express.Router();
var fs = require("fs");
var multer = require("multer");
var upload = multer();
const quotes = require("../schema/quotes");
const passport = require("passport");

var multiparty = require("connect-multiparty"),
  multipartyMiddleware = multiparty();
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: "AKIAICTB4CZMI4FU45RQ",
  secretAccessKey: "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"
});
router.route("/upload").post(
  multipartyMiddleware,
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    var file = req.files.file;

    fs.readFile(file.path, function(err, data) {
      if (err) {
        console.log(err);
      }
      var walls = new quotes();
      var url;

      const params = {
        Bucket: "quotes71", // pass your bucket name
        Key: req.files.file.originalFilename, // file will be saved as testBucket/contacts.csv
        Body: data
      };
      s3.upload(params, function(s3Err, data) {
        if (s3Err) throw s3Err;
        if (data) {
          url = data.Location;
          walls.img.data = url;
          walls.save().then(post => {
            res.json(post);
          });
        }
      });
    });
  }
);

router.get("/quotes", (req, res) => {
  quotes.find().then(post => res.json(post));
});
module.exports = router;
