$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#numberInput").val();

    for ( var index = 1; index <= userInput; index += 1) {

        if (index % 15 === 0) {

            $("#result").append("ping-pong");
            $("#result").append("<br/>");
        } else if (index % 5 === 0) {

             $("#result").append("pong");
             $("#result").append("<br/>");

        } else if (index % 3 === 0) {

            $("#result").append("ping");
            $("#result").append("<br/>");
        } else {

            $("#result").append(index);
            $("#result").append("<br/>");
        }


    };
    $("#result").append();
});


});
