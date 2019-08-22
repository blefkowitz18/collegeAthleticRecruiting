/* eslint-disable no-undef */
console.log("connected")

$(function () {
    $(".login").on("submit", function (event) {
        event.preventDefault();
        if (
            $("#email").val() !== "" &&
            $("#password").val() !== ""
        ) {
            var athlete = {
                email: $("#email")
                    .val()
                    .trim(),
                password: $("#password")
                    .val()
                    .trim(),
            }
        }
        // console.log(athlete)
        $(function () {
            $.ajax("/api/athlete/login", {
                type: "put",
                data: athlete,
            }).then(function () {
                localStorage.setItem("email", athlete.email);
                console.log(localStorage)
            });
            });
        });
    });
// $(".login").on("click", function (event) {
//     event.preventDefault();
//     if (
//         $("#email").val() !== "" &&
//         $("#password").val() !== ""
//     ) {
//         var athlete = {
//             email: $("#email")
//                 .val()
//                 .trim(),
//             password: $("#password")
//                 .val()
//                 .trim(),
//         }
//     }
//     console.log("working")
//     console.log(this)
//     var buttonValue = $(this).val();
//     console.log(buttonValue)
//     localStorage.setItem("email", athlete.email);
//   });
// $(function () {
//     $(".login").on("submit", function (event) {
//         event.preventDefault();
//         if (
//             $("#email").val() !== "" &&
//             $("#password").val() !== ""
//         ) {
//             var athleteTwo = {
//                 email: $("#email")
//                     .val()
//                     .trim(),
//                 password: $("#password")
//                     .val()
//                     .trim(),
//             }
//         }
//         // console.log(athlete)
//         $(function () {
//             // console.log(athleteTwo)
//             $.ajax("/api/athlete/login/myemail", {
//                 type: "get",
//                 data: athleteTwo
//                 }).then(function (data) {
//                     console.log(athleteTwo)
//                 });
//             // });
//         });
//     });
// });

