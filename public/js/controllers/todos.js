"use strict"

app.factory('socket', function (socketFactory) {
    return socketFactory();
  }).
  value('version', '0.1');


app.controller("todos", ["$scope", "$http", "Todo", "socket", function($scope, $http, Todo, socket) {
	
	$scope.todo = {};

	// when landing on the page, get all todos and show them
	
	$scope.todos = [];

	$scope.load = function(){
		Todo.query().$promise.then(function(data){
			$scope.todos = data;
		});
	}

	$scope.load();


	$scope.save = function(){
		if($scope.todo._id){
			Todo.update({_id:$scope.todo._id}, $scope.todo).$promise.then($scope.load)
			//$scope.event.$save().then($scope.load);
		} else {
			var todo = $scope.todo;
			Todo.create(todo).$promise.then($scope.load);
		}

		$scope.todo = new Todo();
	}


	$scope.delete = function(todo){
		Todo.delete(todo).$promise.then($scope.load);
	}

	socket.on('send:time', function (data) {
    	$scope.time = data.time;
    });

    socket.on('send:msg', function (data) {
    	$scope.load();
    });

}]);