// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb


	var server = require('http').createServer(app);
	var io = require('socket.io').listen(server);

	
	// configuration =================

	mongoose.connect('mongodb://localhost:27017/todo_app'); 	// connect to mongoDB database on modulus.io

	app.configure(function() {
		app.set('port', process.env.PORT || 8080);
		app.use(function(req, res, next){
			req.io = io;
			next();
		})
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
		
	});

	
	require("./app/routes.js")(app);

	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


	io.sockets.on('connection', function (socket) {
	  	
	});


	// listen (start app with node server.js) ======================================
	server.listen(app.get('port'), function () {
	  console.log('Express server listening on port ' + app.get('port'));
	});
	console.log("App listening on port 8080");