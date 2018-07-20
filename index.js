const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	next();
});
app.listen(3000, () => console.log('App listening on 3000'));

app.get('/', function(req, res, next){
	res.json({message: 'Server is Up and Running. Try hola and namaste'});
});

app.get('/hola', function(req, res, next){
	res.send('Hola Message from Node JS Server');
});

app.get('/namaste', function(req, res, next){
	res.send('Namaste India from Node JS Server');
});

app.post('/test', function(req, res, next){
	var resJSON = {};
	resJSON.message = req.body.name + " : " + req.body.serial;
	res.json(resJSON);
});
