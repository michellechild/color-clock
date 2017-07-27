(function() {
  'use strict';

var intervalId = 0;
var time = document.querySelector('.clock-time');

function printTimeToScreen () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var hours = ("O" + hours).slice(-2);
  var minutes = ("0" + minutes).slice(-2);
  var seconds = ("0" + seconds).slice(-2);

  time.textContent = hours + ":" + minutes + ":" + seconds;
}

function convertTimeToHex (hours, minutes, seconds) {
  var hoursHex = hours.toString(16);
  var minutesHex = minutes.toString(16);
  var secondsHex = seconds.toString(16);
  var timeHex = "#" + hoursHex + minutesHex + secondsHex;
  return timeHex; 
}


intervalId = window.setInterval(printTimeToScreen, 1000);


}());
