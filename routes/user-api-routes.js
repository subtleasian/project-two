var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new User
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};

// When user creates account, generate ID with uuid
// Send ID to database and store with user login details
// Send ID to local storage (Logged in)
// db.User.create & request.body
// Send back ID with res.json (req.res.userId)
// Remove ID from local storage (Logged out)