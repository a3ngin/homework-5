$(document).ready(function () {

    var topicsArray = ["babies", "viral", "Bradley Cooper"];

    // start butt

    function startButtons() {
        $("#buttons").empty();

        for (let i = 0; i < topicsArray.length; i++) {
            var btn = $("<button>");
            btn.addClass("topicsClass");
            btn.attr("data-name", topicsArray[i]);
            btn.text(topicsArray[i]);
            $("#buttons").append(btn);
        }
    };

    $("#submitbutt").on("click", function (event) {
        event.preventDefault();
        var addedData = $("#userchoice").val().trim();
        if (addedData != "");
        topicsArray.push(addedData);
        startButtons();
        $("#userchoice").val();

    });

    $(document).on("click", ".topicsClass", function () {
        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Ft13wX9WzE2SEzWITz194WdyaJsf8hhT&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

        console.log("click");



        //  https://api.giphy.com/v1/gifs/search?api_key=Ft13wX9WzE2SEzWITz194WdyaJsf8hhT&q=viral&limit=10&offset=0&rating=G&lang=en

        // API key
        // Ft13wX9WzE2SEzWITz194WdyaJsf8hhT
        //start ajax method 


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;


            for (var i = 0; i < results.length; i++) {
                var dataImage = $("<img>");

                dataImage.attr("src", results[i].images.fixed_height_still.url);
                dataImage.attr("data-animate", results[i].images.fixed_height.url);
                dataImage.attr("data-still", results[i].images.fixed_height_still.url);
                dataImage.addClass("gif");
                dataImage.attr("data-state", "still");

                var newItemdiv = $('<div class="newItem">');
                var gifRating = results[i].rating;
                var divRating = $("<p>").text("Rating: " + gifRating);

                newItemdiv.append(divRating);
                newItemdiv.append(dataImage);

                $("#gifImages").prepend(newItemdiv);
            }
        });


        $("#gifImages").on("click", ".gif", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else if (state === "animate") {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still")
            }
        });
    });
    startButtons(topicsArray, "#buttons");


});