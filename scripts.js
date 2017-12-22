window.onload = function() {
  // Run countdown.
  countDown();

  // Update countdown on a 1 sec interval.
  let x = setInterval(countDown(), 1000);

  $("#monthsCircle").hover(function() {
    $(this).css("background-color","#553555");
  }, function() {
    $(this).css("background-color","#232323");
  });

  $("#weeksCircle").hover(function() {
    $(this).css("background-color","#253555");
  }, function() {
    $(this).css("background-color","#232323");
  });

  $("#daysCircle").hover(function() {
    $(this).css("background-color","#255535");
  }, function() {
    $(this).css("background-color","#232323");
  });
}

// Are the date circles expanded?
let dateExpanded = 0;

// Countdown date.
let countDownDate = new Date("Jun 10, 2018 01:35:00").getTime();

// let color = document.getElementById('monthsCircle').style.backgroundColor;


function countDown() {

  // Current date.
  let now = new Date().getTime();

  // Distance between current and future date.
  let distance = countDownDate - now;

  // Time calculations.
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let months = Math.floor(days / 30);
  let weeks = Math.floor(days / 7);

  if (dateExpanded === 1) {

    // Display months.
    document.getElementById('months').innerHTML =
    months + " Months<br>" +
    (days % 30 - 1) + " Days<br>" +
    (hours + 1) + " Hours<br>" +
    minutes + " Minutes<br>" +
    seconds + " Seconds";

    // Display weeks.
    document.getElementById('weeks').innerHTML =
    weeks + " Weeks<br>" +
    (days % 7 + 1) + " Days<br>" +
    (hours + 1) + " Hours<br>" +
    minutes + " Minutes<br>" +
    seconds + " Seconds";

    // Display days.
    document.getElementById('days').innerHTML =
    days + " Days<br>" +
    (hours + 1) + " Hours<br>" +
    minutes + " Minutes<br>" +
    seconds + " Seconds";

    // After date reached.
    if (distance < 0) {
      // clearInterval(x);
      document.getElementById('countDown').innerHTML =
      (-days-1) + "d " + (-hours-1) + "h " + (-minutes-1) + "m " + (-seconds-1) + "s " + "<br>" +
      "Since Israel";
    }

  } else {

    // Display months.
    document.getElementById('months').innerHTML =
    months + " Months<br>";

    // Display weeks.
    document.getElementById('weeks').innerHTML =
    weeks + " Weeks<br>";

    // Display days.
    document.getElementById('days').innerHTML =
    days + " Days<br>";

    // After date reached.
    if (distance < 0) {
      // clearInterval(x);
      document.getElementById('countDown').innerHTML =
      (-days-1) + "d " + (-hours-1) + "h " + (-minutes-1) + "m " + (-seconds-1) + "s " + "<br>" +
      "Since Israel";
    }
  }
}
