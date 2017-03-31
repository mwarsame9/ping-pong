$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var userInput = $("input#numberInput").val();

    for ( index = 1; index <= userInput; index += 1) {
        if (index % 15 === 0) {
            console.log("pingpong");
        } else if (index % 5 === 0) {
            console.log("pong");
        } else if (index % 3 === 0) {
            console.log("ping");
        } else {
            console.log(index);
        }
    };


    event.preventDefault();
  });
});
