// --- Business Logic ---
var inputtedNumbers = [];
var pingPong = function(userInput) {
  for ( var index = 1; index <= userInput; index += 1) {
    number = index;

      if (index % 15 === 0) {

        number = "ping-pong";

      } else if (index % 5 === 0) {

           number = "pong";

      } else if (index % 3 === 0) {

          number = "ping";

      }

        inputtedNumbers.push(number);

  };
}




// --- User Logic ---
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
    inputtedNumbers.forEach(function(number) {
        $("#result").append("<li>" + number + "</li>");
    })
});


});
