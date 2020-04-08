var db = require("../models");

module.exports = function(app) {
  // Get all examples
<<<<<<< HEAD
  app.get("/api/score", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/score", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/score/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
=======
  app.get("/api/scores", function(req, res) {
    db.Score.findAll({}).then(function(dbScores) {
      res.json(dbscores);
    });
  });

  // Create a new Score
  app.post("/api/scores", function(req, res) {
    db.Score.create(req.body).then(function(dbScores) {
      res.json(dbScores);
    });
  });

  // Delete an Score by id
  app.delete("/api/scores/:id", function(req, res) {
    db.Score.destroy({ where: { id: req.params.id } }).then(function(dbScores) {
      res.json(dbScores);
>>>>>>> origin/master
    });
  });
};
