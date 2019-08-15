var express = require("express");
var path = require("path");
var router = express.Router();
var friends = require("../data/friends.js");

router
  .post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(friends);

    res.json(getCompatibleFriend(newFriend));
    friends.push(newFriend);

  })
  .get("/api/friends", function(req, res) {
    res.json(friends);
  });

var getCompatibleFriend = function(newPerson) {
  var compatiblePerson = {};
  var leastDifferences = 0;



  //loops through all friends
  friends.forEach(function(person, index) {
      var currentDifference = 0;
      var totalDifference = 0;

      //loop through each friend score array against the newFriend score array
      for (var i =0; i < person.scores.length; i++) {
        currentDifference = Math.abs(person.scores[i] - newPerson.scores[i]);
        totalDifference += currentDifference;
        console.log(`Current Differnce: ${currentDifference}`);
      }
      console.log(`TOTAL DIFF: ${totalDifference}`)
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
