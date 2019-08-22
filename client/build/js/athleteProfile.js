/* eslint-disable no-undef */
console.log("hello")

$(function () {
    console.log(localStorage.email)
    $.ajax("/api/athlete/myprofile/" + localStorage.email, {
        type: "get"
    }).then(function (data) {
        if (!data) {
            var loginLink =
                "<button type='button' class='btn btn-secondary'> <a href='/login'>Please sign in on the log in page</a></button>"
            $(".container-fluid").append(loginLink);
        }
        else {
            console.log(data);
            createAthleteCard(data.name, data.name, data.height_feet, data.height_inches, data.weight, data.position, data.about_me, data.high_school, data.video_or_picture);
            console.log("card" + data.id);
        }
    });
});

function createAthleteCard(athleteNameOne, athleteName, athleteHeightFeet, athleteHeightInches, athleteWeight, athletePosition, athleteAboutMe, athleteHighSchool, athleteMedia) {

    var myCard =
        "<h2> Welcome: " + athleteNameOne + "</h2>" +
        "<div class = 'card mb-3'>" +
        "<div class='card-body row'>" +
        "<div class='col-6'>" +
        "<h5> Name: " + athleteName + "</h5>" +
        "<p> Height (feet): " + athleteHeightFeet + "</p>" +
        "<p> Height (inches): " + athleteHeightInches + "</p>" +
        "<p> Weight: " + athleteWeight + " pounds </p>" +
        "<p> Position: " + athletePosition + "</p>" +
        "<p> About Me: " + athleteAboutMe + "</p>" +
        "<p> High School: " + athleteHighSchool + "</p>" +
        "<button type = 'button' class='btn btn-primary' id='updateButton'> <a href='/updateAthleteProfile' class='textBlack'> Update Your Information </a></button>" +
        "</div>" +
        "<div class = 'col-6'>" +
        "<iframe class='media' src=" + athleteMedia + "> </iframe>" +
        "</div>" +
        "</div>" +
        "</div>"
    $("#athleteCard").append(myCard);
};

