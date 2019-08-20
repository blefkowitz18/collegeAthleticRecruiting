/* eslint-disable no-undef */
console.log("hello")
var athleteName = $("<h5>");
var athleteHeightFeet = $("<p>")
var athleteHeightInches = $("<p>")
var athleteWeight = $("<p>")
var athletePosition = $("<p>")
var athleteAboutMe = $("<p>")
var athleteHighSchool = $("<p>")
var athleteMedia = $("<iframe>")

$(function () {
    $.ajax("/api/athlete/mensvolleyball", {
        type: "get"
    }).then(function (data) {
        console.log(data[0].name)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            athleteName = $("<h5>");
            athleteHeightFeet = $("<p>")
            athleteHeightInches = $("<p>")
            athleteWeight = $("<p>")
            athletePosition = $("<p>")
            athleteAboutMe = $("<p>")
            athleteHighSchool = $("<p>")
            athleteMedia = $("<iframe>")

            createAthleteCard()

            athleteName.attr("id", "athleteName" + data[i].id);
            athleteHeightFeet.attr("id", "athleteHeightFeet" + data[i].id);
            athleteHeightInches.attr("id", "athleteHeightInches" + data[i].id);
            athleteWeight.attr("id", "athleteWeight" + data[i].id);
            athletePosition.attr("id", "athletePosition" + data[i].id);
            athleteAboutMe.attr("id", "athleteAboutMe" + data[i].id);
            athleteHighSchool.attr("id", "athleteHighSchool" + data[i].id);
            athleteMedia.attr("id", "athleteMedia" + data[i].id);

            $("#athleteName" + data[i].id).text("Name: " + data[i].name);
            $("#athleteHeightFeet" + data[i].id).text("Height (feet): " + data[i].height_feet);
            $("#athleteHeightInches" + data[i].id).text("Height (inches): " + data[i].height_inches + " Inches");
            $("#athleteWeight" + data[i].id).text("Weight: " + data[i].weight + " Pounds")
            $("#athletePosition" + data[i].id).text("Position: " + data[i].position);
            $("#athleteAboutMe" + data[i].id).text("About Me: " + data[i].about_me);
            $("#athleteHighSchool" + data[i].id).text("High School: " + data[i].high_school);
            $("#athleteMedia" + data[i].id).attr("src", data[i].video_or_picture);

            
        };
    });
});

function createAthleteCard() {
    var newCard = $("<div>");
    newCard.addClass("card mb-3");
    $("#viewPlayers").append(newCard);

    var createRow = $("<div>");
    createRow.addClass("card-body row");
    newCard.append(createRow);

    var createColumn = $("<div>");
    createColumn.addClass("col-6");
    createRow.append(createColumn);
    createColumn.append(athleteName);
    athleteName.addClass("athleteName")
    createColumn.append(athleteHeightFeet);
    athleteHeightFeet.addClass("athleteHeight")
    createColumn.append(athleteHeightInches);
    athleteHeightInches.addClass("athleteHeight")
    createColumn.append(athleteWeight);
    athleteWeight.addClass("athleteWeight")
    createColumn.append(athletePosition);
    athletePosition.addClass("athletePosition")
    createColumn.append(athleteAboutMe);
    athleteAboutMe.addClass("athleteAboutMe")
    createColumn.append(athleteHighSchool);
    athleteHighSchool.addClass("athleteHighSchool")
    var favortieButton = $("<button>");
    favortieButton.addClass("btn btn-primary");
    favortieButton.text("Favorite this Player");
    createColumn.append(favortieButton);

    var createColumnTwo = $("<div>");
    createColumnTwo.addClass("col-6");
    createRow.append(createColumnTwo);
    createColumnTwo.append(athleteMedia);
    athleteMedia.css({
        "margin-left": "17%",
        height: "315px",
        width: "420px",
        src: ""
    });
    var viewMoreVideosButton = $("<button>");
    viewMoreVideosButton.text("View More Videos");
    viewMoreVideosButton.addClass("btn btn-primary");
    viewMoreVideosButton.css({
        "margin-left": "35%"
    });
    createColumnTwo.append(viewMoreVideosButton);
}