(function() {
  'use strict';

var intervalId = 0;
var time = document.querySelector('.clock-time');


function convertTimeToHex (h, m, s) {
  var hoursHex = h.toString(16);
  var minutesHex = m.toString(16);
  var secondsHex = s.toString(16);
console.log(hoursHex, minutesHex, secondsHex);
  hoursHex = ("O" + hoursHex).slice(-2);
  minutesHex = ("0" + minutesHex).slice(-2);
  secondsHex = ("O" + secondsHex).slice(-2);
  var timeHex = "#" + hoursHex + minutesHex + secondsHex;
  return timeHex;
}
console.log(convertTimeToHex);

function printTimeToScreen () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var hours = ("O" + hours).slice(-2);
  var minutes = ("0" + minutes).slice(-2);
  var seconds = ("0" + seconds).slice(-2);

  time.textContent = hours + ":" + minutes + ":" + seconds;

  var timeAsHex = convertTimeToHex(hours, minutes, seconds);

  document.getElementById('body').style.backgroundColor = timeAsHex;

}



intervalId = window.setInterval(printTimeToScreen, 1000);


}());
