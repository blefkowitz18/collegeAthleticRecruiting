/* eslint-disable no-undef */
console.log("hello")
// var athleteName = $("<h5>");
// var athleteHeightFeet = $("<p>")
// var athleteHeightInches = $("<p>")
// var athleteWeight = $("<p>")
// var athletePosition = $("<p>")
// var athleteAboutMe = $("<p>")
// var athleteHighSchool = $("<p>")
// var athleteMedia = $("<iframe>")

$(function (){
    $.ajax("/api/athlete", {
        type: "get"
    }).then (function (data){
        console.log(data)
        // for (var i=0; i<data.length; i++){
        //     console.log(data[i].name)
        // }
    })
})