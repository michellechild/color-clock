(function() {
    'use strict';

  var timerID = 0;
  var clockTime = document.querySelector('.clockTime');

  function displayTime () {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    var hours = ("0" + hours).slice(-2);
    var minutes = ("0" + minutes).slice(-2);
    var seconds = ("0" + seconds).slice(-2);
    var time = hours + " : " + minutes + " : " + seconds;

    clockTime.textContent = time;
  }

  // function colorChange() {
  //   var r =
  // }

  window.setInterval(displayTime, 1000);

}());
