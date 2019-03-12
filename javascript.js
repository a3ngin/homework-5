$(document).ready(function() {

    var topics = ["babies", "viral", "Bradley Cooper"];

        // start butt
        
        function startButtons() {
            $("buttons").empty();
            
            for(let i = 0; i < topics.length; i++) {
                var btn = $("<button>");
                btn.addClass("topics");
                btn.attr("data-name", topics[i]);
                btn.text(topics[i]);
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

        $(document).on("click", ".")
        


// Ft13wX9WzE2SEzWITz194WdyaJsf8hhT





















});