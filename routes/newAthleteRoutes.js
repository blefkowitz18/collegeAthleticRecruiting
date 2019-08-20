var db = require("../models");

module.exports = function(app) {
  app.get("/api/athlete", function(req, res) {
    db.Athletes.findAll({}).then(function(dbAthletes) {
      res.json(dbAthletes);
    });
  });
  app.get("/api/athlete/mensvolleyball", function(req, res) {
    db.Athletes.findAll({
      where:{
        sport: 1
      }
    }).then(function(dbAthletes) {
      res.json(dbAthletes);
    });
  });
  app.post("/api/athlete", function(req, res) {
    db.Athletes.create(req.body).then(function(dbAthletes) {
      res.json(dbAthletes);
      console.log("new athlete created")
    });
  });
}