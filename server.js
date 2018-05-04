// create a connector to access the database
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('vast2015_mc1.db');

// initialize express
let express = require('express');
let restapi = express();


// define a simple entry point to retrieve all users
restapi.get('/users', function(req, res){
	db.all("SELECT distinct id FROM movs", function(err, rows){
		res.json(rows);
	})
})


// get all points of a specified user
restapi.get('/user/:id', function(req, res){
	let id = req.params.id;
	if(id){
		db.all("SELECT * from movs where id = ?", id,function(err,rows){
			res.json(rows);
		})
	}
})

restapi.listen(3000);
console.log("Listening on port 3000...");


// from web visualization project we will write:

// d3.json('http://localhost:3000/users')
// 	.then(function(err, data){
//
// 	})
