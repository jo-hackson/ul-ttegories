var CountDown = (function ($) {
    // Length ms
    // var TimeOut = 10000;
    // Interval ms
    // var TimeGap = 1000;

    // var CurrentTime = ( new Date() ).getTime();
    // var EndTime = ( new Date() ).getTime() + TimeOut;

    var GuiTimer = $('#countdown');
    var GuiPause = $('#pause');
    var GuiResume = $('#resume').hide();

    var Running = true;

    var UpdateTimer = function() {
        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            CurrentTime += TimeGap;
            if( CurrentTime >= EndTime ) {
                GuiTimer.css('color','red');
            }
        }
        // Update Gui
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();

        GuiTimer.html(
            (Minutes < 10 ? '0' : '') + Minutes
            + ':'
            + (Seconds < 10 ? '0' : '') + Seconds );
    };

    var Pause = function() {
        Running = false;
        GuiPause.hide();
        GuiResume.show();
    };

    var Resume = function() {
        Running = true;
        GuiPause.show();
        GuiResume.hide();
    };

    var Start = function( Timeout ) {
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

jQuery('#pause').on('click',CountDown.Pause);
jQuery('#resume').on('click',CountDown.Resume);

// ms
CountDown.Start(120000);





// var CountDown = (function($){
//   var TimeOut = 12000;
//   var TimeGap = 1000;

//   var CurrentTime = ( new Date() ).getTime();
//   var EndTime = ( new Date() ).getTime() + TimeOut;

//   var Timer = $("span.count");
//   var PlayButton = $("i#play-time");
//   var PauseButton = $("i#pause-time");
//   var Running = true;

//   var UpdateTimer = function() {
//     // Run till timeout
//     if( CurrentTime + TimeGap < EndTime ) {
//         setTimeout( UpdateTimer, TimeGap );
//     }
//       // Countdown if running
//     if( Running ) {
//         CurrentTime += TimeGap;
//         if( CurrentTime >= EndTime ) {
//             GuiTimer.css('color','red');
//         }
//     }
//     // Update Gui
//     var Time = new Date();
//     Time.setTime( EndTime - CurrentTime );
//     var Minutes = Time.getMinutes();
//     var Seconds = Time.getSeconds();

//     GuiTimer.html(
//         (Minutes < 10 ? '0' : '') + Minutes
//         + ':'
//         + (Seconds < 10 ? '0' : '') + Seconds );
//     };


//   var Pause = function(){
//     Running = false;
//     PlayButton.hide();
//   };

//   var Play = function(){
//     Running = true;
//     PauseButton.hide();
//   }

// });

// function countDown(seconds, id) {

//   var element = document.getElementById(id);
//   console.log("What")
//   console.log(element)
//   element.innerHTML = seconds;

//   if (seconds < 1) {
//     clearTimeout(timer);
//     element.innerHTML = '<p>Stop typing!</p>';
//     element.innerHTML = '<a href="/results">Results</a>';
//   }

//   seconds--;
//   var timer = setTimeout(countDown('+seconds+', '+id+', 1000));


// }
