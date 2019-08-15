var express = require("express");
var router = express.Router();
var friends = require("../data/friends.js");

/**
 * creates path for a both POST and GET for /api/friends
 */
router
  .post("/api/friends", function(req, res) {
    var newFriend = req.body;

    res.json(getCompatibleFriend(newFriend));
    friends.push(newFriend);
  })
  .get("/api/friends", function(req, res) {
    res.json(friends);
  });

/**
 * Returns the most compatible front.  This is calculated by looking
 * at who has the least total variances in their score
 */
var getCompatibleFriend = function(newPerson) {
  var compatiblePerson = {};
  var leastDifferences = 0;

  //loops through all friends
  friends.forEach(function(person, index) {
    var currentDifference = 0;
    var totalDifference = 0;

    //loop through each friend score array against the newFriend score array
    for (var i = 0; i < person.scores.length; i++) {
      currentDifference = Math.abs(person.scores[i] - newPerson.scores[i]);
      totalDifference += currentDifference;
    }
    //if its the first person or differences is less than the current lowest,
    //the new friend is the most compatible
    if (index === 0 || totalDifference < leastDifferences) {
      leastDifferences = totalDifference;
      compatiblePerson = person;
    }
  });

  return compatiblePerson;
};

module.exports = router;
