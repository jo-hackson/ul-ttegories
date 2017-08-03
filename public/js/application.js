var countDown = function() {
  var counter = 2
   setInterval(function(){
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0 ) {
        span.innerHTML = "Time is up! <a href='/results'>Results</a>"
      }
    }, 1000);
}



$(document).ready(function() {

  $("#play-time").on("click", function(){
    $("span#count").show();
    $("#play-time").hide();
    $("form#game").show();

    countDown();
  })




});
