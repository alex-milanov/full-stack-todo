"use strict"

 app.provider('Todo', function(){
	this.$get = ['$resource', function($resource){
		var Todo = $resource('/api/todos/:_id',{},{
			update: {
				method: 'PUT'
			},
			create: {
				method: 'POST'
			}
		});
		return Todo;
	}];
});