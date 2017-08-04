var countDown = function() {
  var counter = 5
   setInterval(function(){
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0 ) {
        $("form#game").submit();
        span.innerHTML = "Time is up! <a href='/results'>Results</a>"
      }
    }, 1000);
}



$(document).ready(function() {

  $("#play-time").on("click", function(){
    $("span#count").removeClass("hidden");
    $("#play-time").hide();
    $("form#game").removeClass("hidden");
    $("input").show();

    countDown();
  })

  $("form#game").on("submit", function(event){
    event.preventDefault();
    console.log("yay")
    var $form = $(this)

    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()
    })
    .done(function(response){

      // $form.addClass("hidden");
      // var user_response = response[1][0]
      var points_alloted = response[1][1]
      // $("p.reponse").html(user_response)
      // $("p.points").html(points_alloted)
      // var $div = $("div.results")
      // var $form = $(document).find("form#game").children())

      Object.keys(response).forEach(function(index){
        var modIndex = parseInt(index * 1)
        console.log(modIndex)
        console.log(index)
        console.log($("form input:nth-child(2)"))
        $("form input:nth-child(" + modIndex + ")").children().innerhtml = response[index][1];
        console.log(response[index][1])
          // $("form + ":nth-child(" + index + " + 1)").append(points_alloted);
          // $("div.results").append('points earned ' + response[index][1]);
      });

      console.log("done")
    })
    .fail(function(){
      console.log("fail")
    })
    .always(function(){
      console.log("moo")
    })
  });



});
