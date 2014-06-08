	"use strict"

	var mongoose = require('mongoose'); 

	module.exports = mongoose.model('Todo', {
		text : String,
		name: String
	});

