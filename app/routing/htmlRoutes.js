// Basic route that sends the user to the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
