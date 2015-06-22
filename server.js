var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 8888;



app.use(express.static(__dirname + '/public'))

app.get('/interest_rate', function(req, res){
	res.json(((Math.random() * 20) + 1).toFixed(2))
})

app.listen(port, function(){
	console.log("i'm listening on " + port)
})