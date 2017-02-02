(function() {
   function TasksCtrl(Tasks, $scope) {
     this.tasks = Tasks.all;

     //$scope.tasks = vm.tasks;
     $scope.addTask = function(newTask) {
       this.tasks.$add(newTask);
     }
   }

   angular
       .module('bloctime')
       .controller('TasksCtrl', ['Tasks', '$scope', TasksCtrl]);
 })();
