$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var num = 60;
    var intervalId;



    $("#submitButton").hide();
    $(".questions").hide();
    $(".results").hide();



    // on start button click, run these functions

    $("#startButton").on("click", function () {

        function run() {
            $("#startButton").hide();
            $("#submitButton").show();
            $(".questions").show();

            clearInterval(intervalId);
            intervalId = setInterval(timer, 1000);
        };

        function stop() {
            clearInterval(intervalId);
        };

        function timer() {
            num--;
            $("#showTime").html("Time Left: " + num + " seconds");

            if (num === 0) {
                stop()
            };
        };

        setTimeout(function () {
            $(".questions").hide();
            $("#submitButton").hide();
            $(".results").show();
        }, 61000);

        run();

        $(".correct").click(function () {
            if ($(".correct")) {
                console.log("correct");
                correct++;
                $("#correctScore").text("Correct: " + correct);
            }
            
            $(".incorrect").click(function () {
                console.log("works");
                incorrect++
                $("#incorrectScore").text("Incorrect: " + incorrect);
            })



            function submit() {
                $("#submitButton").on("click", function () {
                    $(".results").show();
                    $(".questions").hide();
                    stop();
                })
            }

            submit();
        })
    })
})