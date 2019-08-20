var db = require("../models");

module.exports = function(app) {
  app.get("/api/recruiter", function(req, res) {
    db.Recruiters.findAll({}).then(function(dbRecruiters) {
      res.json(dbRecruiters);
    });
  });
  app.post("/api/recruiter", function(req, res) {
    db.Recruiters.create(req.body).then(function(dbRecruiters) {
      res.json(dbRecruiters);
      console.log("new recruiter created")
    });
  });
  app.post("/api/login", function(req, res){
          
  })
}