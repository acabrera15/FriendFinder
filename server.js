// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var routes = require('./app/routing/htmlRoutes.js')
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './app/public')));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// app.get("/", function(req, res) {
//   console.log(path.join(__dirname, "/app/public/home.html"))
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

app.use('/', routes)
app.use('/suvey', routes)