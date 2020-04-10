var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //new user page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  //log in page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //survey page
  app.get("/survey/:id", function(req, res) {
    var id = req.params.id;
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Load mood result page and pass in score data by id
  app.get("/moodresult/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMood) {
      res.render("moodResult", {
        user: dbMood
      });
    });
  });

  // Load friend result page and pass in friend data by id
  app.get("/friends/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbFriend) {
      res.render("friends", {
        user: dbFriend
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
