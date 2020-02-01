const express = require('express');
const router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer();
const wallpaper = require('../schema/wallpaper');
const passport = require('passport');

var multiparty = require('connect-multiparty'),
  multipartyMiddleware = multiparty();
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: 'AWSACESSID',
  secretAccessKey: 'AWSACESSKEY',
});
router.route('/upload').post(multipartyMiddleware, (req, res) => {
  var file = req.files.file;
  fs.readFile(file.path, function(err, data) {
    if (err) {
      console.log(err);
    }
    var walls = new wallpaper();
    var url;

    const params = {
      Bucket: 'wallpapers71', // pass your bucket name
      Key: req.files.file.originalFilename, // file will be saved as testBucket/contacts.csv
      Body: data,
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
});
router.get('/wallpaper', (req, res) => {
  wallpaper.find().then(post => res.json(post));
});
module.exports = router;
