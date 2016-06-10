var express = require('express');
var router = express.Router();
var ytdl = require('ytdl-core');

router.get('/', function (req, res, next) {
  var id = req.query.v;
  if (id) {
    var url = 'https://www.youtube.com/watch?v=' + id;
    // Optional arguments passed to youtube-dl.
    ytdl.getInfo(url, function callback(err, info) {
      res.setHeader('Content-Type', 'application/json');
      res.send(info.formats);
    })
  }
});

module.exports = router;
