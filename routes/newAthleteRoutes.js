var db = require("../models");

module.exports = function (app) {
  app.get("/api/athlete", function (req, res) {
    db.Athletes.findAll({}).then(function (dbAthletes) {
      res.json(dbAthletes);
    });
  });
  app.get("/api/athlete/mensvolleyball", function (req, res) {
    db.Athletes.findAll({
      where: {
        sport: 1
      }
    }).then(function (dbAthletes) {
      res.json(dbAthletes);
    });
  });

  app.get("/api/athlete/myprofile/:email", function (req, res) {
    console.log("received request")
    db.Athletes.findOne({
      where: {
        email: req.params.email
      }
    }).then(function (dbAthletes) {
      res.json(dbAthletes);
    });
  });

  app.put("/api/athlete/login", function (req, res) {
    db.Athletes.update(
      {
        logged_in: true,
        age: 17
      },
      {
        where: {
          email: req.body.email,
          password: req.body.password
        }
      }).then(function (data){
        res.json(data)
      })
  })


  app.post("/api/athlete", function (req, res) {
    db.Athletes.create(req.body).then(function (dbAthletes) {
      res.json(dbAthletes);
      console.log("new athlete created")
    });
  });
}