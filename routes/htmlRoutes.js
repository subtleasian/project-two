var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //new user page
  app.get("/user", function(req, res) {
    res.render("user", {});
  });

  //log in page
  app.get("/login", function(req, res) {
    res.render("login", {});
  });
};
