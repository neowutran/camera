var express = require('express');
var app = express();
var fs = require("fs");
var server = false;
function camera(){
	
	let cameraAngle = 0;
	if(server != false){
		server.close();
	}
	
	app.get('/camera', function (req, res) {
		cameraAngle = req.query.angle;
		res.end( "" );
	});
	
	server = app.listen(9999, function () {
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
    if(instance == false){
		instance = new camera();
	}
	return instance;
}
