var express = require("express");
var path = require("path");
var router = express.Router();
var friends = require('../data/friends.js')

router.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  friends.push(newFriend);
  console.log(friends);

  res.json(newFriend);
});

router.get("/api/friends", function(req, res) {
    res.send(friends);
});

module.exports = router;