var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/scores", function(req, res) {
    db.Score.findAll({}).then(function(dbScores) {
      res.json(dbScores);
    });
  });

  // Create a new Score
  app.post("/api/scores", function(req, res) {
    db.Score.create(req.body).then(function(dbScores) {
      res.json(dbScores);
    });
  });

  // Delete a Score by id
  app.delete("/api/scores/:id", function(req, res) {
    db.Score.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbScores) {
      res.json(dbScores);
    });
  });
};