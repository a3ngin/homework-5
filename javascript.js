$(document).ready(function() {

    var topicsArray = ["babies", "viral", "Bradley Cooper"];

        // start butt
        
        function startButtons() {
            $("buttons").empty();
            
            for(let i = 0; i < topicsArray.length; i++) {
                var btn = $("<button>");
                btn.addClass("topics");
                btn.attr("data-name", topicsArray[i]);
                btn.text(topicsArray[i]);
                $("#buttons").append(btn);
            }
        };

        $("#submitbutt").on("click", function (event) {
            event.preventDefault();
            var addedData = $("userchoice").val().trim();
            if (addedData != " ");
            startButtons();
            $("userchoice").val();
        
        }

        )}

        $("#buttonToClick").on("click", function(event) {
            event.preventDefault();
            var addedData = $("#userChoice").val().trim();
            if (addedData != "") {
                topicsArray.push(addedData);
                startbutton();
                $("#userchoice").val();
        }
        })

        $(document).on("click", ".topicsArray", function ()  {
            var topic = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&limit=10&api_key=Ft13wX9WzE2SEzWITz194WdyaJsf8hhT"


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var results = response.data;


                for (var i = 0; i < results.length; i++) {
                    var dataImage =  $("<img>");
                    
                }
            }





// Ft13wX9WzE2SEzWITz194WdyaJsf8hhT





















});