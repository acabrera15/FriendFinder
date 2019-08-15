//dependencies
var express = require('express');
var path = require("path");
var router = express.Router();

//route to the home page
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

//route to the survey page
router.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survery.html"))
});

module.exports = router;