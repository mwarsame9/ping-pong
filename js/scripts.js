$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var userInput = $("input#numberInput").val();
    var display = ""

// var game = []
//   game.forEach(function (userInput) {

    for ( var index = 1; index <= userInput; index += 1) {
      // value = index
        if ((index % 5 === 0) && (index % 3 === 0)) {
            // value = "pingpong";
            console.log("pingpong");

        } else if (index % 5 === 0) {
            //  value = "pong";
             console.log("pong");

        } else if (index % 3 === 0) {
            // value = "ping";
            console.log("ping");
        } else {
            console.log(index);
        }


    };

// });

    event.preventDefault();
  });
});
