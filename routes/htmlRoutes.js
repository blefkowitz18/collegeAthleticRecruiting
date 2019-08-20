var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/myprofile", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/athleteProfile.html"));
  });

  app.get("/createnewprofile", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/createNewProfile.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/login.html"));
  });

  app.get("/newathlete", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/newAthlete.html"));
  });

  app.get("/recruiterprofile", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/recruiterProfile.html"));
  });

  app.get("/mensvolleyball", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/mensVolleyball.html"));
  });
  // app.use(function(req, res){
  //   res.sendFile(path.join(__dirname, "../client/build/index.html")); 
  // })
 

  // app.get("/scenario", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/scenario.html/:id"));
  // });

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};