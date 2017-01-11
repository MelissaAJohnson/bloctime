(function() {
  function Timer($interval) {
    var Timer = {};
    var stop;
    var counterLength = 1500;

    Timer.buttonText = "Let's Get Started";
    Timer.counter = counterLength;

    Timer.startSession = function () {
      this.isTimeRunning = true;
      this.timeStarted = true;
      Timer.buttonText = "Take A Break";
      stop = $interval(function(){
        Timer.counter--;

        if(Timer.counter == 0) {
          $interval.cancel(stop);
          Timer.counter = counterLength;
          this.isTimeRunning = false;
        }
      }, 1000);
    }

    Timer.stop = function () {
      $interval.cancel(stop);
      this.isTimeRunning = false;
      Timer.buttonText = "Keep Going";
    }

    Timer.reset = function () {
      Timer.counter = counterLength;
      this.isTimeRunning = false;
      this.timeStarted = false;
    }

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
