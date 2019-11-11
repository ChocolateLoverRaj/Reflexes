var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "genetics.html" );
})

serv.listen(proccess.env.PORT);
console.log("Server is listening on port " + proccess.env.PORT);
