"use strict"

app.controller("todos", ["$scope", "$http", "Todo", function($scope, $http, Todo) {
	
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
			Todo.post(todo).$promise.then($scope.load);
		}

		$scope.todo = new Todo();
	}


	$scope.delete = function(todo){
		Todo.delete(todo).$promise.then($scope.load);
	}

}]);