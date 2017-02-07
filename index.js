var express = require('express');
var app = express();
var fs = require("fs");

function camera(dispatch){
	console.log("new camera instance");
	let cameraAngle = 0;

	app.get('/camera', function (req, res) {
		cameraAngle = req.query.angle;
		res.end( "" );
	})

	var server = app.listen(9999, function () {
		var host = server.address().address
		var port = server.address().port
		console.log("Listening camera modification at http://%s:%s", host, port)
	});
	
	this.angle = function(){
		return cameraAngle;
	}

}
let instance = false;

module.exports = function NpcManager(dispatch){
    if(!dispatch) return instance;
    instance = new camera(dispatch);
}
