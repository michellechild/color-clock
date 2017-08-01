(function() {
    'use strict';

  var timerID = 0;
  var clockTime = document.querySelector('.clockTime');
  var mouseHover = false;

//displays clock on screen
  function displayTime (hours, minutes, seconds) {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    var hours = ("0" + hours).slice(-2);
    var minutes = ("0" + minutes).slice(-2);
    var seconds = ("0" + seconds).slice(-2);

    var time = hours + " : " + minutes + " : " + seconds;


    if (seconds === "00") {
      minuteColorChange();
    }

    if (mouseHover) {
      clockTime.textContent = document.body.style.backgroundColor;
    } else {
      clockTime.textContent = time;
    }

  }

  function randomColorGenerator() {
    return Math.floor(Math.random()*256);
  }

  function randomBackgroundColor() {
    var red = randomColorGenerator();
    var green = randomColorGenerator();
    var blue = randomColorGenerator();
    var rGB = "rgb(" + red + "," + green + "," +  blue + ")";

    return rGB;
  }

  function minuteColorChange() {
      document.body.style.backgroundColor = randomBackgroundColor();
  }

  function hover() {
    mouseHover = true;
  }

  function nohover() {
    mouseHover = false;
  }

  clockTime.addEventListener("mouseover", hover);
  clockTime.addEventListener("mouseout", nohover);
  window.onload = minuteColorChange();
  window.setInterval(displayTime, 1000);

}());
