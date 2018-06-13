window.onload = function() {
  // Run countdown.
  countDown();

  // Update countdown on a 1 sec interval.
  setInterval("countDown()", 1000);
}

// Are the date circles expanded?
let monthsExpanded = 0;

function monthsExpand() {
  if (monthsExpanded === 0) {
    document.getElementById('monthsExpanded').style.display = "block"
    monthsExpanded = 1;
  } else {
    document.getElementById('monthsExpanded').style.display = "none"
    monthsExpanded = 0;
  }
}

let weeksExpanded = 0;

function weeksExpand() {
  if (weeksExpanded === 0) {
    document.getElementById('weeksExpanded').style.display = "block"
    weeksExpanded = 1;
  } else {
    document.getElementById('weeksExpanded').style.display = "none"
    weeksExpanded = 0;
  }
}

let daysExpanded = 0;

function daysExpand() {
  if (daysExpanded === 0) {
    document.getElementById('daysExpanded').style.display = "block"
    daysExpanded = 1;
  } else {
    document.getElementById('daysExpanded').style.display = "none"
    daysExpanded = 0;
  }
}

// Countdown date.
let countDownDate = new Date("Jun 22, 2018 08:00:00").getTime();

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

    // Display months.
    document.getElementById('months').innerHTML =
    months + " Months<br>";

    document.getElementById('monthsExpanded').innerHTML =
    (days % 30 - 1) + " Days<br>" +
    (hours + 1) + " Hours<br>" +
    minutes + " Minutes<br>" +
    seconds + " Seconds";

    // Display weeks.
    document.getElementById('weeks').innerHTML =
    weeks + " Weeks<br>";

    document.getElementById('weeksExpanded').innerHTML =
    (days % 7) + " Days<br>" +
    (hours + 1) + " Hours<br>" +
    minutes + " Minutes<br>" +
    seconds + " Seconds";

    // Display days.
    document.getElementById('days').innerHTML =
    days + " Days<br>";

    document.getElementById('daysExpanded').innerHTML =
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
}
