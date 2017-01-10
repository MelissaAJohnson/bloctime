(function() {
  function Timer($interval) {
    var Timer = {};
    var stop;

    Timer.counter = 1500;

    Timer.startSession = function () {
      this.isTimeRunning = true;
      this.timeStarted = true;
      stop = $interval(function(){
        Timer.counter--;

        if(Timer.counter == 0) {
          $interval.cancel(stop);
          Timer.counter = 1500;
          this.isTimeRunning = false;
        }
      }, 1000);
    }

    Timer.stop = function () {
      $interval.cancel(stop);
      this.isTimeRunning = false;
    }

    Timer.reset = function () {
      Timer.counter = 1500;
      this.isTimeRunning = false;
      this.timeStarted = false;
    }

    return Timer;
  };

  angular
    .module('bloctime')
    .factory('Timer', ['$interval', Timer]);
})();
