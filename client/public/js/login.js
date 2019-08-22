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