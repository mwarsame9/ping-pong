// --- Business Logic ---
var list = []
var pingPong = function(userInput) {
  for ( var index = 1; index <= userInput; index += 1) {
      if (index % 15 === 0) {
        output = "ping-pong";
      } else if (index % 5 === 0) {
           output = "pong";
      } else if (index % 3 === 0) {
          output = "ping";
      } else {
        output = index;
      }
      list.push(output);
  };
}
// --- User Logic ---
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
    list.forEach(function(output) {
        $("#result").append(output + "<br>");
    })
  });
});
