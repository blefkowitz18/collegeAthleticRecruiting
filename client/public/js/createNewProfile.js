/* eslint-disable no-undef */
console.log("hello world")

$(function () {
    $(".newRecruiter").on("submit", function (event) {
        event.preventDefault();

        if (
            $("#recruiterName").val() !== "" &&
            $("#university").val() !== "" &&
            $("#recruiterEmail").val() !== "" &&
            $("#recruiterPassword").val() !== ""
        ) {
            var newRecruiter = {
                name: $("#recruiterName")
                    .val()
                    .trim(),
                university: $("#university")
                    .val()
                    .trim(),
                email: $("#recruiterEmail")
                    .val()
                    .trim(),
                password: $("#recruiterPassword")
                    .val()
                    .trim()
            };
        };
        console.log(newRecruiter)

        $.ajax("/api/recruiter", {
            type: "POST",
            data: newRecruiter
        }).then(function () {
            console.log("new recruiter created 1")
            $("#recruiterName").val("")
            $("#university").val("");
            $("#recruiterEmail").val("");
            $("#recruiterPassword").val("");
            $("#recruiterPasswordTwo").val("");
        });
    });
});