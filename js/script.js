$(function() {
  //All JS goes within these brackets

  //Registration calculator
  $("#Trivia-submit").click(function() {
    var yearString = $("#age-amount").val();
    var year = parseInt(yearString);

    if (year == 1960) {
      $('#result').text('You got it!');
    } else {
      $('#result').text('Oops!');
    } 
  });

});

$(document).ready(function () { $('body').hide().fadeIn(3000).delay(8000)});

