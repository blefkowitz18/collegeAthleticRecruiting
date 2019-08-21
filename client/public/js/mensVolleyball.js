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

            // $("athleteName").attr("id", "athleteName" + data[i].id);

            // athleteHeightFeet.attr("id", "athleteHeightFeet" + data[i].id);
            // athleteHeightInches.attr("id", "athleteHeightInches" + data[i].id);
            // athleteWeight.attr("id", "athleteWeight" + data[i].id);
            // athletePosition.attr("id", "athletePosition" + data[i].id);
            // athleteAboutMe.attr("id", "athleteAboutMe" + data[i].id);
            // athleteHighSchool.attr("id", "athleteHighSchool" + data[i].id);
            // athleteMedia.attr("id", "athleteMedia" + data[i].id);

            

            // $("athleteName" + data[i].id).text("Name: " + data[i].name);
            // $("#athleteHeightFeet" + data[i].id).text("Height (feet): " + data[i].height_feet);
            // $("#athleteHeightInches" + data[i].id).text("Height (inches): " + data[i].height_inches + " Inches");
            // $("#athleteWeight" + data[i].id).text("Weight: " + data[i].weight + " Pounds")
            // $("#athletePosition" + data[i].id).text("Position: " + data[i].position);
            // $("#athleteAboutMe" + data[i].id).text("About Me: " + data[i].about_me);
            // $("#athleteHighSchool" + data[i].id).text("High School: " + data[i].high_school);
            // $("#athleteMedia" + data[i].id).attr("src", data[i].video_or_picture);


        };
    });
});

function createAthleteCard(athleteName, athleteHeightFeet, athleteHeightInches, athleteWeight, athletePosition, athleteAboutMe, athleteHighSchool, athleteMedia) {

    var myCard = 
    "<div class = 'card mb-3'>" +
        "<div class='card-body row'>"+
            "<div class='col-6'>"+
                "<h5>" + "Name: " + athleteName + "</h5>" +
                "<p>" + "Height (feet): " + athleteHeightFeet + "</p>" +
                "<p>" + "Height (inches): " + athleteHeightInches + "</p>" +
                "<p>" + "Weight: " +  athleteWeight + "pounds" + "</p>" +
                "<p>" + "Position: " + athletePosition + "</p>" +
                "<p>" + "About Me: " + athleteAboutMe + "</p>" + 
                "<p>" + "High School: " + athleteHighSchool + "</p>" +
            "</div>"+
            "<div class = 'col-6>" +
                "<iframe class = 'media' src=" + athleteMedia +"> </iframe>" +
            "</div>" +
        "</div>" +
    "</div>"
    $("#viewPlayers").append(myCard);
    

    
    // var name = $("<h5>");
    // var heightFeet = $("<p>")
    // var heightInches = $("<p>")
    // var athleteWeight = $("<p>")
    // var athletePosition = $("<p>")
    // var athleteAboutMe = $("<p>")
    // var athleteHighSchool = $("<p>")
    // var athleteMedia = $("<iframe>")
    // var newCard = $("<div>");
    // newCard.addClass("card mb-3");


    // var createRow = $("<div>");
    // createRow.addClass("card-body row");


    // var createColumn = $("<div>");
    // createColumn.addClass("col-6");
    // createColumn.append(athleteName);
    // athleteName.addClass("athleteName")
    // createColumn.append(athleteHeightFeet);
    // athleteHeightFeet.addClass("athleteHeight")
    // createColumn.append(athleteHeightInches);
    // athleteHeightInches.addClass("athleteHeight")
    // createColumn.append(athleteWeight);
    // athleteWeight.addClass("athleteWeight")
    // createColumn.append(athletePosition);
    // athletePosition.addClass("athletePosition")
    // createColumn.append(athleteAboutMe);
    // athleteAboutMe.addClass("athleteAboutMe")
    // createColumn.append(athleteHighSchool);
    // athleteHighSchool.addClass("athleteHighSchool")
    // var favortieButton = $("<button>");
    // favortieButton.addClass("btn btn-primary");
    // favortieButton.text("Favorite this Player");
    // createColumn.append(favortieButton);

    // var createColumnTwo = $("<div>");
    // createColumnTwo.addClass("col-6");

    // createColumnTwo.append(athleteMedia);
    // athleteMedia.css({
    //     "margin-left": "17%",
    //     height: "315px",
    //     width: "420px",
    //     src: ""
    // });


    // createRow.append(createColumn);
    // createRow.append(createColumnTwo);
    // newCard.append(createRow);
    // $("#viewPlayers").append(newCard);
    // var viewMoreVideosButton = $("<button>");
    // viewMoreVideosButton.text("View More Videos");
    // viewMoreVideosButton.addClass("btn btn-primary");
    // viewMoreVideosButton.css({
    //     "margin-left": "35%"
    // });
    // createColumnTwo.append(viewMoreVideosButton);
}