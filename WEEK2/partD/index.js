var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const url = require('url')
const path = require('path')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){

      res.sendFile(path.join(__dirname + '/index.html'))

});

app.listen(3000, function() {

});
