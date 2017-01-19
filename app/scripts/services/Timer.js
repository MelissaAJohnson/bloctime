(function() {
  function Timer($interval) {
    var Timer = {};
    var stop;
    var SESSION_LENGTH = 1500;
    var BREAK_LENGTH = 300;

    Timer.buttonText = "Let's Get Started";
    Timer.counter = SESSION_LENGTH;
    Timer.onBreak = false;

    Timer.startSession = function () {
      Timer.isTimeRunning = true;
      this.timeStarted = true;
      Timer.onBreak = false;
      Timer.buttonText = "Pause";
      stop = $interval(function(){
        Timer.counter--;

        if(Timer.counter == 0) {
          $interval.cancel(stop)
          Timer.isTimeRunning = false;
          Timer.onBreak = true;
          Timer.buttonText = "Take a Break";
          Timer.counter = BREAK_LENGTH;
        }
      }, 1000);
    }

    Timer.stop = function () {
      $interval.cancel(stop);
      Timer.isTimeRunning = false;
      Timer.buttonText = "Resume";
    }

    Timer.reset = function () {
      Timer.counter = SESSION_LENGTH;
      Timer.isTimeRunning = false;
      this.timeStarted = false;
      Timer.buttonText = "Start Session"
    }

    Timer.takeBreak = function () {
      Timer.onBreak = true;
      Timer.isTimeRunning = true;
      Timer.buttonText = "Pause"
      stop = $interval(function() {
        Timer.counter--;

        if(Timer.counter == 0) {
          $interval.cancel(stop);
          Timer.isTimeRunning = false;
          Timer.onBreak = false;
          Timer.buttonText = "Start Session";
          Timer.counter = SESSION_LENGTH;
          Timer.timeStarted = false;
        }
      }, 1000);
    }

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
