/* eslint-disable no-undef */
/* eslint-disable camelcase */
$(function() {
    $(".newAthlete").on("submit", function(event) {
      event.preventDefault();
  
      if (
        $("#athleteEmail").val() !== "" &&
        $("#athletePassword").val() !== "" &&
        $("#athleteName").val() !== "" &&
        $("#athleteSport").val() !== "" &&
        $("#athletePosition").val() !== "" &&
        $("#athleteAge").val() !== "" &&
        $("#athleteHeightFeet").val() !== "" &&
        $("#athleteHeightInches").val() !== "" &&
        $("#athleteWeight").val() !== "" &&
        $("#athleteHighSchool").val() !== "" &&
        $("#athleteAboutMe").val() !== "" &&
        $("#athletePlayingLink").val() !== ""
      ) {
        var newAthlete = {
          email: $("#athleteEmail")
            .val()
            .trim(),
          password: $("#athletePassword")
            .val()
            .trim(),
          name: $("#athleteName")
            .val()
            .trim(),
          sport: $("#athleteSport")
            .val()
            .trim(),
          position: $("#athletePosition")
            .val()
            .trim(),
          age: $("#athleteAge")
            .val()
            .trim(),
          height_feet: $("#athleteHeightFeet")
            .val()
            .trim(),
          height_inches: $("#athleteHeightInches")
            .val()
            .trim(),
          weight: $("#athleteWeight")
            .val()
            .trim(),
          high_school: $("#athleteHighSchool")
            .val()
            .trim(),
          about_me: $("#athleteAboutMe")
            .val()
            .trim(),
          video_or_picture: $("#athletePlayingLink")
            .val()
            .trim()
        };    
      }
      console.log(newAthlete);
  
      $.ajax("/api/athlete", {
        type: "POST",
        data: newAthlete
      }).then(function() {
        console.log("new athlete created");
        $("#athleteEmail").val("");
        $("#athletePassword").val("");
        $("#athletePasswordTwo").val("");
        $("#athleteName").val("");
        $("#athleteSport").val("");
        $("#athletePosition").val("");
        $("#athleteAge").val("");
        $("#athleteHeightFeet").val("");
        $("#athleteHeightInches").val("");
        $("#athleteWeight").val("");
        $("#athleteHighSchool").val("");
        $("#athleteAboutMe").val("");
        $("#athletePlayingLink").val("");
      });
    });
  });
  