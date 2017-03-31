$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var userInput = $("input#numberInput").val();

    event.preventDefault();
  });
});
