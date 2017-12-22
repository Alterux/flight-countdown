// Countdown date.
let countDownDate = new Date("Jun 10, 2018 01:35:00").getTime();

// 1 sec interval.
let x = setInterval(function() {

  // Current date.
  let now = new Date().getTime();

  // Distance between current and future date.
  let distance = countDownDate - now;

  // Time calculations.
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let months = Math.round(days / 30 * 10) / 10;
  let weeks = Math.round(days / 7 * 10) / 10;

  // Display result.
  document.getElementById('countDown').innerHTML =
  months + " Months<br>" +
  weeks + " Weeks<br>" +
  days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // After date reached.
  if (distance < 0) {
    // clearInterval(x);
    document.getElementById('countDown').innerHTML =
    (-days-1) + "d " + (-hours-1) + "h " + (-minutes-1) + "m " + (-seconds-1) + "s " + "<br>" +
    "Since Israel";
  }
}, 1000);
