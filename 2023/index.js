
/* ************************************ */
/* <!--@Anusha Landing Page section --> */

// Set the date we are counting down to and convert into sec
var countDownDate = new Date("Feb 17, 2023 00:00:00").getTime();

/* @Anusha
 * function updating countdown every second until ElleHacks starts and indicates
 * if event has started and/or ended
**/
var x = setInterval(function() {

  var currentDate = new Date().getTime(); // Get current date and convert into sec
  var timeLeft = countDownDate - currentDate; // Find the time left until countDownDate

  // Get days, hours, minutes and seconds calc
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown in <p> "timer" element
  document.getElementById("timer").innerHTML = days + ":"
            + hours.toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping:false}) + ":"
            + minutes.toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping:false}) + ":"
            + seconds.toLocaleString('en-CA', {minimumIntegerDigits: 2, useGrouping:false});

  // Display when time is up
  if (timeLeft < 0) {
    clearInterval(x);
    countDownDate = new Date("Feb 19, 2023 23:59:59").getTime();
    currentDate = new Date().getTime();
    timeLeft = countDownDate - currentDate;
    // When event started but not ended yet
    if (timeLeft > 0) {
    //        var display = document.getElementById("timer").innerHTML = "Event Started!!";
        document.getElementById("timer").innerHTML =
        "<span style='font-size:30px;vertical-align: middle;text-align: center; color:#000'>"
        + "Event Started!!"
        + "</span>";

    // When event ended
    } else {
        document.getElementById("timer").innerHTML =
                "<span style='font-size:30px;vertical-align: middle;text-align: center; color:#000'>"
                + "Event Ended :/"
                + "</span>";
    }
  }
}, 1000);

/* <!--@Anusha Landing page section end here--> */
/* ******************************************** */

$('#myCarousel').on('slide.bs.carousel', function () {
  
  

})

