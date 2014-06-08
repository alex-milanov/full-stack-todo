"use strict"

 app.provider('Todo', function(){
	this.$get = ['$resource', function($resource){
		var Todo = $resource('/api/todos/:_id',{},{
			update: {
				method: 'PUT'
			},
			post: {
				method: 'POST'
			}
		});
		return Todo;
	}];
});