(function() {
    'use strict';

  var timerID = 0;
  var clockTime = document.querySelector('.clockTime');
  var progressBar = document.querySelector('.progressBar');
  var mouseHover = false;

  //gets random color
  function randomColorGenerator() {
    return Math.floor(Math.random()*256);
  }

  //sets random color as rgb value
  function randomBackgroundColor() {
    var red = randomColorGenerator();
    var green = randomColorGenerator();
    var blue = randomColorGenerator();
    var rGB = "rgb(" + red + "," + green + "," +  blue + ")";

    return rGB;
  }

  //ties random color to the background color
  function minuteColorChange() {
      document.body.style.backgroundColor = randomBackgroundColor();
  }

  function hover() {
    mouseHover = true;
  }

  function nohover() {
    mouseHover = false;
  }

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

    //sets width of progress bar based on seconds
    var percentageWidth = ((seconds/60) * 580) + "px";

    //changes color on the second
    if (seconds === "00") {
      minuteColorChange();
    }
    //displays changing width in progress bar
    progressBar.style.width = percentageWidth;

    //adds hover effect
    if (mouseHover) {
      clockTime.textContent = document.body.style.backgroundColor;
    } else {
      clockTime.textContent = time;
    }

  }

  clockTime.addEventListener("mouseover", hover);
  clockTime.addEventListener("mouseout", nohover);

  //changes color on load
  window.onload = minuteColorChange();

  //displays time on load
  window.setInterval(displayTime, 1000);

}());
