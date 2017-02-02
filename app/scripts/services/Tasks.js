(function() {
  function Tasks($firebaseArray) {
    var ref = new Firebase("https://bloctime-81fdd.firebaseio.com/tasks");

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    function clearTasks() {
  		ref.remove();
  	};

    return {
      all: tasks,
      clearTasks: clearTasks
    };
  }

  angular
    .module('bloctime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
