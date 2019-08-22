/* eslint-disable no-undef */
console.log("hello")


$(function () {
    $.ajax("/api/athlete/mensvolleyball", {
        type: "get"
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);

            createAthleteCard(data[i].name, data[i].height_feet, data[i].height_inches, data[i].weight, data[i].position, data[i].about_me, data[i].high_school, data[i].video_or_picture);

            console.log("card" + data[i].id);
        };
    });
});

function createAthleteCard(athleteName, athleteHeightFeet, athleteHeightInches, athleteWeight, athletePosition, athleteAboutMe, athleteHighSchool, athleteMedia) {

    var myCard = 
    "<div class = 'card mb-3 animated rotateInDownLeft'>" +
        "<div class='card-body row'>"+
            "<div class='col-6'>"+
                "<h5> Name: " + athleteName + "</h5>" +
                "<p> Height (feet): " + athleteHeightFeet + "</p>" +
                "<p> Height (inches): " + athleteHeightInches + "</p>" +
                "<p> Weight: " +  athleteWeight + " pounds </p>" +
                "<p> Position: " + athletePosition + "</p>" +
                "<p> About Me: " + athleteAboutMe + "</p>" + 
                "<p> High School: " + athleteHighSchool + "</p>" +
            "</div>"+
            "<div class = 'col-6'>" +
                "<iframe class='media' src=" + athleteMedia +"> </iframe>" +
            "</div>" +
        "</div>" +
    "</div>"
    $("#viewPlayers").append(myCard);
}