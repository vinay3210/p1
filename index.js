"use strict";

var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

var __projectRoot = __dirname + '/';
app.use(express.static(__projectRoot));

app.get('/', function (req, res) {
    res.sendFile(path.join(__projectRoot + '/index.html'));
});

// console.log('Server up and running on http://localhost:3000/');
// app.listen(3000); 

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});