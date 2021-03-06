require("dotenv").config();
var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.static("client/public"));

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/newAthleteRoutes")(app);
require("./routes/newRecruiterRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;