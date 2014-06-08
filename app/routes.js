"use strict"



module.exports = function(app){

	// define model =================
	var todos = require("./controllers/todos.js");

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', todos.list);

	// create todo and send back all todos after creation
	app.post('/api/todos', todos.create);

	// delete a todo
	app.delete('/api/todos/:todo_id', todos.delete);

}