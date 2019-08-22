$(function() {
    $(".updateAthlete").on("submit", function(event) {
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
        var updateAthlete = {
          email: $("#athleteEmail")
            .val()
            .trim(),
          password: $("#athletePassword")
            .val()
            .trim(),
          name: $("#athleteName")
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
      };
      console.log(updateAthlete);
  
      $.ajax("/api/athlete/update", {
        type: "put",
        data: updateAthlete
      }).then(function() {
        // console.log("new athlete created");
        $("#athleteEmail").val("");
        $("#athletePassword").val("");
        $("#athletePasswordTwo").val("");
        $("#athleteName").val("");
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